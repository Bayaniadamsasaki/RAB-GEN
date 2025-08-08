'use client';

import { Download, Plus, Save, Trash } from 'lucide-react';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import HeaderNew from './HeaderNew.jsx';

const ExcelWorkspace = () => {
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    location: '',
    duration: '',
    work: ''
  });

  const [rabData, setRabData] = useState([
    // Header data
    {
      id: 1,
      category: 'USER MANAGEMENT',
      items: [
        { no: 1, name: 'User Registration', qty: 1, unit: '', fee: 800000, total: 800000 },
        { no: 2, name: 'Authentication and Login', qty: 1, unit: '', fee: 800000, total: 800000 },
        { no: 3, name: 'User Account Limits', qty: 1, unit: '', fee: 800000, total: 800000 },
        { no: 4, name: 'Time-Based access Restrictions', qty: 1, unit: '', fee: 800000, total: 800000 },
        { no: 5, name: 'User Profile', qty: 1, unit: '', fee: 750000, total: 750000 },
        { no: 6, name: 'Role Management', qty: 1, unit: '', fee: 650000, total: 650000 },
        { no: 7, name: 'Audit Log', qty: 1, unit: '', fee: 500000, total: 500000 }
      ]
    },
    {
      id: 2,
      category: 'APP FEATURES',
      items: [
        { no: 1, name: 'Input data', qty: 1, unit: '', fee: 2000000, total: 2000000 },
        { no: 2, name: 'Data processing', qty: 1, unit: '', fee: 1500000, total: 1500000 },
        { no: 3, name: 'Export data as PDF', qty: 1, unit: '', fee: 500000, total: 500000 },
        { no: 4, name: 'Data Disposition', qty: 1, unit: '', fee: 1000000, total: 1000000 },
        { no: 5, name: 'Data Management', qty: 1, unit: '', fee: 1000000, total: 1000000 },
        { no: 6, name: 'Verification with Digital Signature', qty: 1, unit: '', fee: 1000000, total: 1000000 }
      ]
    },
    {
      id: 3,
      category: 'OPERATIONAL',
      items: [
        { no: 1, name: 'Hosting', qty: 1, unit: 'Tahun', fee: 2500000, total: 2500000 },
        { no: 2, name: 'Domain', qty: 1, unit: 'Tahun', fee: 500000, total: 500000 },
        { no: 3, name: 'SSL License', qty: 1, unit: 'Tahun', fee: 500000, total: 500000 },
        { no: 4, name: 'Google SEO Optimization', qty: 1, unit: 'Tahun', fee: 1250000, total: 1250000 },
        { no: 5, name: 'Website', qty: 1, unit: 'Tahun', fee: 2000000, total: 2000000 }
      ]
    },
    {
      id: 4,
      category: 'PERSONNEL COST',
      items: [
        { no: 1, name: 'UI/UX Designer', qty: 1, unit: 'Orang', fee: 3000000, total: 3000000 },
        { no: 2, name: 'Programmer', qty: 2, unit: 'Orang', fee: 5000000, total: 10000000 },
        { no: 3, name: 'Network Engineer', qty: 1, unit: 'Orang', fee: 3000000, total: 3000000 }
      ]
    }
  ]);

  const [selectedCell, setSelectedCell] = useState(null);
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Calculate totals
  const calculateSubtotal = (categoryItems) => {
    return categoryItems.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateGrandTotal = () => {
    return rabData.reduce((sum, category) => sum + calculateSubtotal(category.items), 0);
  };

  const calculatePercentage = (amount) => {
    const grandTotal = calculateGrandTotal();
    return grandTotal > 0 ? ((amount / grandTotal) * 100).toFixed(1) : 0;
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID').format(amount);
  };

  // Handle cell editing
  const handleCellClick = (categoryId, itemIndex, field) => {
    const cellId = `${categoryId}-${itemIndex}-${field}`;
    setSelectedCell(cellId);
    
    if (field === 'name' || field === 'qty' || field === 'unit' || field === 'fee') {
      setEditingCell(cellId);
      const category = rabData.find(cat => cat.id === categoryId);
      setEditValue(category.items[itemIndex][field].toString());
    }
  };

  const handleCellChange = (value) => {
    setEditValue(value);
  };

  const handleCellSubmit = () => {
    if (!editingCell) return;
    
    const [categoryId, itemIndex, field] = editingCell.split('-');
    const catId = parseInt(categoryId);
    const idx = parseInt(itemIndex);
    
    setRabData(prevData => {
      return prevData.map(category => {
        if (category.id === catId) {
          const updatedItems = category.items.map((item, index) => {
            if (index === idx) {
              const updatedItem = { ...item };
              
              if (field === 'qty' || field === 'fee') {
                updatedItem[field] = parseInt(editValue) || 0;
                updatedItem.total = updatedItem.qty * updatedItem.fee;
              } else {
                updatedItem[field] = editValue;
              }
              
              return updatedItem;
            }
            return item;
          });
          return { ...category, items: updatedItems };
        }
        return category;
      });
    });
    
    setEditingCell(null);
    setEditValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCellSubmit();
    } else if (e.key === 'Escape') {
      setEditingCell(null);
      setEditValue('');
    }
  };

  // Add new row
  const addNewRow = (categoryId) => {
    setRabData(prevData => {
      return prevData.map(category => {
        if (category.id === categoryId) {
          const newItem = {
            no: category.items.length + 1,
            name: 'New Item',
            qty: 1,
            unit: '',
            fee: 0,
            total: 0
          };
          return { ...category, items: [...category.items, newItem] };
        }
        return category;
      });
    });
  };

  // Delete row
  const deleteRow = (categoryId, itemIndex) => {
    setRabData(prevData => {
      return prevData.map(category => {
        if (category.id === categoryId) {
          const updatedItems = category.items.filter((_, index) => index !== itemIndex)
            .map((item, index) => ({ ...item, no: index + 1 }));
          return { ...category, items: updatedItems };
        }
        return category;
      });
    });
  };

  // Export to Excel
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    
    const data = [
      [`[Nama Proyek Kamu / Web App]`],
      [],
      [`Pekerjaan`, `[Insert Project Website App]`],
      [`Lokasi`, `[${projectInfo.location}]`],
      [`Tahun`, `[${projectInfo.duration}]`],
      [],
      [`NO`, `ITEM PEKERJAAN`, `QTY`, `SAT`, `Fee`, `TOTAL`, `BOBOT`],
    ];

    let overallNo = 1;
    rabData.forEach((category) => {
      // Category header
      data.push([overallNo, category.category]);
      
      // Category items
      category.items.forEach((item) => {
        const percentage = calculatePercentage(item.total);
        data.push([
          ``,
          `- ${item.name}`,
          item.qty,
          item.unit,
          `Rp ${formatRupiah(item.fee)}`,
          `Rp ${formatRupiah(item.total)}`,
          `${percentage}%`
        ]);
      });
      
      // Subtotal
      const subtotal = calculateSubtotal(category.items);
      const subtotalPercentage = calculatePercentage(subtotal);
      data.push([
        ``,
        `SUB TOTAL (${overallNo})`,
        ``,
        ``,
        ``,
        `Rp ${formatRupiah(subtotal)}`,
        `${subtotalPercentage}%`
      ]);
      data.push([]);
      
      overallNo++;
    });

    // Grand total
    const grandTotal = calculateGrandTotal();
    data.push([``, `JUMLAH`, ``, ``, ``, `Rp ${formatRupiah(grandTotal)}`, `100.0%`]);
    data.push([]);
    data.push([`Terbilang [Isi otomatis]`]);
    data.push([]);
    data.push([`[Nama Instansi / Startup]`]);
    data.push([`[Jabatan]`]);
    data.push([]);
    data.push([]);
    data.push([`[Nama Kamu]`]);

    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Set column widths
    ws['!cols'] = [
      { wch: 5 },   // NO
      { wch: 35 },  // ITEM PEKERJAAN
      { wch: 8 },   // QTY
      { wch: 10 },  // SAT
      { wch: 15 },  // Fee
      { wch: 15 },  // TOTAL
      { wch: 8 }    // BOBOT
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'RAB');
    XLSX.writeFile(wb, `RAB_${projectInfo.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderNew />
      
      {/* Excel-like Workspace */}
      <div className="p-4 max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="bg-gray-800 border border-gray-700 shadow-lg p-4 mb-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={exportToExcel}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                <Download size={16} />
                <span>Export Excel</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                <Save size={16} />
                <span>Save Project</span>
              </button>
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded">
              <span className="text-sm text-gray-300">Total: </span>
              <span className="font-bold">Rp {formatRupiah(calculateGrandTotal())}</span>
            </div>
          </div>
        </div>

        {/* Excel-like Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          {/* Project Header */}
          <div className="border-b border-gray-700">
            <div className="p-6 bg-gray-750 text-center">
              <input
                type="text"
                value={projectInfo.name}
                onChange={(e) => setProjectInfo({...projectInfo, name: e.target.value})}
                onFocus={(e) => e.target.select()}
                placeholder="Website App Project"
                className="w-full text-2xl font-bold bg-transparent border-none outline-none text-white placeholder-gray-400 text-center"
              />
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-0 border-t border-gray-700">
              <div className="p-3 border-r border-gray-700 bg-gray-750">
                <span className="font-medium text-gray-300">Pekerjaan:</span>
              </div>
              <div className="p-3 bg-gray-800">
                <input
                  type="text"
                  value={projectInfo.work}
                  onChange={(e) => setProjectInfo({...projectInfo, work: e.target.value})}
                  onFocus={(e) => e.target.select()}
                  placeholder="Insert Project Website App"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400"
                />
              </div>
              <div className="p-3 border-r border-t border-gray-700 bg-gray-750">
                <span className="font-medium text-gray-300">Lokasi:</span>
              </div>
              <div className="p-3 border-t border-gray-700 bg-gray-800">
                <input
                  type="text"
                  value={projectInfo.location}
                  onChange={(e) => setProjectInfo({...projectInfo, location: e.target.value})}
                  onFocus={(e) => e.target.select()}
                  placeholder="Lokasi detail kamu"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400"
                />
              </div>
              <div className="p-3 border-r border-t border-gray-700 bg-gray-750">
                <span className="font-medium text-gray-300">Tahun:</span>
              </div>
              <div className="p-3 border-t border-gray-700 bg-gray-800">
                <input
                  type="text"
                  value={projectInfo.duration}
                  onChange={(e) => setProjectInfo({...projectInfo, duration: e.target.value})}
                  onFocus={(e) => e.target.select()}
                  placeholder="Durasi pengerjaan"
                  className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[950px] grid grid-cols-11 bg-gray-700 text-white font-bold border-b border-gray-600">
              <div className="col-span-1 p-3 border-r border-gray-600 text-center text-sm">NO</div>
              <div className="col-span-4 p-3 border-r border-gray-600 text-center text-sm">ITEM PEKERJAAN</div>
              <div className="col-span-1 p-3 border-r border-gray-600 text-center text-sm">QTY</div>
              <div className="col-span-1 p-3 border-r border-gray-600 text-center text-sm">SAT</div>
              <div className="col-span-2 p-3 border-r border-gray-600 text-center text-sm">TOTAL</div>
              <div className="col-span-1 p-3 border-r border-gray-600 text-center text-sm">BOBOT</div>
              <div className="col-span-1 p-3 text-center text-sm">DELETE</div>
            </div>
          </div>

          {/* Table Body */}
          {rabData.map((category, categoryIndex) => (
            <div key={category.id}>
              {/* Category Header */}
              <div className="min-w-[950px] grid grid-cols-11 bg-gray-600 text-white font-bold border-b border-gray-500">
                <div className="col-span-1 p-3 border-r border-gray-500 text-center text-sm">{categoryIndex + 1}</div>
                <div className="col-span-10 p-3 font-bold text-sm">{category.category}</div>
              </div>

              {/* Category Items */}
              {category.items.map((item, itemIndex) => {
                const cellId = `${category.id}-${itemIndex}`;
                const percentage = calculatePercentage(item.total);
                
                return (
                                    <div key={itemIndex} className="min-w-[950px] grid grid-cols-11 border-b border-gray-600 hover:bg-gray-750 transition-colors">
                    {/* Empty NO */}
                    <div className="col-span-1 p-3 border-r border-gray-600"></div>
                    
                    {/* Item Name */}
                    <div 
                      className="col-span-4 p-3 border-r border-gray-600 cursor-text hover:bg-gray-700 transition-colors"
                      onClick={() => handleCellClick(category.id, itemIndex, 'name')}
                    >
                      {editingCell === `${cellId}-name` ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => handleCellChange(e.target.value)}
                          onBlur={handleCellSubmit}
                          onKeyDown={handleKeyPress}
                          className="w-full border-none outline-none bg-gray-700 backdrop-blur-sm px-2 py-1 rounded text-white text-sm"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm text-gray-100 font-medium">- {item.name}</span>
                      )}
                    </div>

                    {/* QTY */}
                    <div 
                      className="col-span-1 p-3 border-r border-gray-600 text-center cursor-text hover:bg-gray-700 transition-colors"
                      onClick={() => handleCellClick(category.id, itemIndex, 'qty')}
                    >
                      {editingCell === `${cellId}-qty` ? (
                        <input
                          type="number"
                          value={editValue}
                          onChange={(e) => handleCellChange(e.target.value)}
                          onBlur={handleCellSubmit}
                          onKeyDown={handleKeyPress}
                          className="w-full border-none outline-none bg-gray-700 backdrop-blur-sm text-center px-2 py-1 rounded text-white text-sm"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm text-gray-100 font-medium">{item.qty}</span>
                      )}
                    </div>

                    {/* SAT/Unit */}
                    <div 
                      className="col-span-1 p-3 border-r border-gray-600 text-center cursor-text hover:bg-gray-700 transition-colors"
                      onClick={() => handleCellClick(category.id, itemIndex, 'unit')}
                    >
                      {editingCell === `${cellId}-unit` ? (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => handleCellChange(e.target.value)}
                          onBlur={handleCellSubmit}
                          onKeyDown={handleKeyPress}
                          className="w-full border-none outline-none bg-gray-700 backdrop-blur-sm text-center px-2 py-1 rounded text-white text-sm"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm text-gray-200">{item.unit}</span>
                      )}
                    </div>

                    {/* TOTAL */}
                    <div 
                      className="col-span-2 p-3 border-r border-gray-600 text-right cursor-text hover:bg-gray-700 transition-colors"
                      onClick={() => handleCellClick(category.id, itemIndex, 'fee')}
                    >
                      {editingCell === `${cellId}-fee` ? (
                        <input
                          type="number"
                          value={editValue}
                          onChange={(e) => handleCellChange(e.target.value)}
                          onBlur={handleCellSubmit}
                          onKeyDown={handleKeyPress}
                          className="w-full border-none outline-none bg-gray-700 backdrop-blur-sm text-right px-2 py-1 rounded text-white text-sm"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm font-semibold text-green-400">Rp {formatRupiah(item.total)}</span>
                      )}
                    </div>

                    {/* BOBOT */}
                    <div className="col-span-1 p-3 border-r border-gray-600 text-center">
                      <span className="text-sm font-medium text-blue-400">{percentage}%</span>
                    </div>

                    {/* DELETE BUTTON */}
                    <div className="col-span-1 p-3 text-center">
                      <button
                        onClick={() => deleteRow(category.id, itemIndex)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20 p-1 rounded transition-colors"
                        title="Delete item"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Add Row Button */}
              <div className="min-w-[950px] grid grid-cols-11 border-b border-gray-600 bg-gray-750">
                <div className="col-span-1 p-2 border-r border-gray-600"></div>
                <div className="col-span-10 p-2">
                  <button
                    onClick={() => addNewRow(category.id)}
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <Plus size={12} />
                    Add Item
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="min-w-[950px] grid grid-cols-11 bg-gray-600 border-b-2 border-gray-500">
                <div className="col-span-1 p-2 border-r border-gray-500"></div>
                <div className="col-span-4 p-2 border-r border-gray-500 font-bold text-white text-sm">
                  SUB TOTAL ({categoryIndex + 1})
                </div>
                <div className="col-span-1 p-2 border-r border-gray-500"></div>
                <div className="col-span-1 p-2 border-r border-gray-500"></div>
                <div className="col-span-2 p-2 border-r border-gray-500 text-right font-bold text-green-400 text-sm">
                  Rp {formatRupiah(calculateSubtotal(category.items))}
                </div>
                <div className="col-span-1 p-2 border-r border-gray-500 text-center font-bold text-blue-400 text-sm">
                  {calculatePercentage(calculateSubtotal(category.items))}%
                </div>
                <div className="col-span-1 p-2"></div>
              </div>
            </div>
          ))}

          {/* Grand Total */}
          <div className="min-w-[950px] grid grid-cols-11 bg-gray-700 text-white font-bold">
            <div className="col-span-1 p-2 border-r border-gray-600"></div>
            <div className="col-span-4 p-2 border-r border-gray-600 font-bold text-sm">
              JUMLAH
            </div>
            <div className="col-span-1 p-2 border-r border-gray-600"></div>
            <div className="col-span-1 p-2 border-r border-gray-600"></div>
            <div className="col-span-2 p-2 border-r border-gray-600 text-right font-bold text-green-400 text-sm">
              Rp {formatRupiah(calculateGrandTotal())}
            </div>
            <div className="col-span-1 p-2 border-r border-gray-600 text-center font-bold text-blue-400 text-sm">
              100.0%
            </div>
            <div className="col-span-1 p-2"></div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-750 border-t border-gray-600">
            <div className="text-sm text-gray-300 mb-2">Terbilang [Isi otomatis]</div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div></div>
              <div className="text-right">
                <div className="mb-2 text-gray-300">[Nama Instansi / Startup]</div>
                <div className="mb-8 text-gray-300">[Jabatan]</div>
                <div className="border-b border-gray-400 pb-1 text-gray-300">[Nama Kamu]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelWorkspace;
