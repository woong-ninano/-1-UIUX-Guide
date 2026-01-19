
import React, { useState } from 'react';
import { ChevronLeft, Menu, X, Check, Camera, ChevronRight, ChevronDown, HelpCircle, Search, Home, ArrowUpRight, Download, Eye, Plane, Image as ImageIcon, Smartphone } from 'lucide-react';

// --- Layout Components ---

export const Header: React.FC<{
  type?: 'home' | 'content' | 'process' | 'hidden';
  title?: string;
  showMenu?: boolean;
}> = ({ type = 'content', title = '타이틀', showMenu = true }) => {
  return (
    <div className="w-full bg-white border border-gray-200 h-12 flex items-center justify-between px-4 mb-4 relative shadow-sm">
      {/* Left Area */}
      <div className="flex items-center min-w-[32px]">
        {type === 'home' ? (
           <Home size={24} className="text-gray-800" />
        ) : (
           <ChevronLeft size={24} className="text-gray-800 cursor-pointer" />
        )}
      </div>

      {/* Center Area */}
      <div className="flex-1 text-center truncate px-2">
        {type !== 'hidden' && (
            <span className="font-bold text-[16px] text-[#222]">{title}</span>
        )}
      </div>

      {/* Right Area */}
      <div className="flex items-center justify-end min-w-[32px]">
        {type === 'process' ? (
          <X size={24} className="text-gray-800 cursor-pointer" />
        ) : (
          showMenu && <Menu size={24} className="text-gray-800 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export const StickyBottomBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex gap-2">
            {children}
        </div>
    );
};

// --- Input Components ---

export const InputField: React.FC<{ 
  label?: string; 
  placeholder?: string; 
  value?: string; 
  type?: string;
  error?: boolean; 
  success?: boolean;
  disabled?: boolean;
  message?: string;
  rightElement?: React.ReactNode;
  readOnly?: boolean;
  clearable?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, placeholder, value, type = 'text', error, success, disabled, message, rightElement, readOnly, clearable, textAlign = 'left', onChange }) => {
  return (
    <div className="w-full">
      {label && <label className={`block text-xs mb-1.5 font-medium ${error ? 'text-red-500' : 'text-gray-500'}`}>{label}</label>}
      <div className="relative group">
        <input 
          type={type}
          defaultValue={value}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full h-9 px-0 border-b border-gray-300 focus:border-[#ff6600] focus:outline-none text-[15px] transition-colors bg-transparent placeholder-gray-300
            ${textAlign === 'right' ? 'text-right' : textAlign === 'center' ? 'text-center' : 'text-left'}
            ${error ? 'border-[#E53935] text-[#E53935]' : ''} 
            ${success ? 'border-green-500' : ''}
            ${disabled ? 'text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-900'}
            ${readOnly ? 'text-gray-600 cursor-default' : ''}
            ${rightElement ? 'pr-8' : ''}
          `}
        />
        {/* Right Element or Clear Button */}
        <div className="absolute right-0 top-2 flex items-center gap-2">
           {clearable && value && !disabled && !readOnly && (
             <button className="text-gray-300 hover:text-gray-500 rounded-full bg-gray-200 w-4 h-4 flex items-center justify-center transition-colors">
               <X size={10} strokeWidth={3} />
             </button>
           )}
           {rightElement}
        </div>
      </div>
      {message && (
        <p className={`text-[11px] mt-1.5 ${error ? 'text-[#E53935]' : 'text-[#666]'}`}>{message}</p>
      )}
    </div>
  );
};

export const ResidentNumberInput: React.FC<{ 
    label?: string; 
    frontValue?: string; 
    backValue?: string;
    type?: 'basic' | 'secure'; // Type 1 vs Type 2
}> = ({ label = "주민등록번호", frontValue, backValue, type = 'basic' }) => {
    return (
        <div className="w-full">
            <label className="block text-xs mb-1.5 font-medium text-gray-500">{label}</label>
            <div className="flex items-center gap-2">
                <div className="flex-1">
                     <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-center bg-white focus-within:border-[#ff6600] transition-colors">
                        <input 
                            type="text" 
                            className="w-full text-center outline-none text-[15px] bg-transparent text-gray-900 placeholder-gray-300"
                            placeholder="앞 6자리"
                            defaultValue={frontValue}
                            maxLength={6}
                        />
                     </div>
                </div>
                <div className="text-gray-400 font-bold">-</div>
                <div className="flex-1 flex items-center gap-2">
                    {type === 'basic' ? (
                        <>
                            <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center bg-white focus-within:border-[#ff6600] transition-colors shrink-0">
                                <input 
                                    type="text" 
                                    className="w-full text-center outline-none text-[15px] bg-transparent text-gray-900" 
                                    defaultValue={backValue?.[0] || ''}
                                    maxLength={1}
                                />
                            </div>
                            <div className="flex gap-1.5 items-center pl-1">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-10 border border-gray-300 rounded bg-gray-50 flex items-center justify-center text-gray-400 text-xs tracking-[0.5em]">
                             ●●●●●●●
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const SecurePasswordDisplay: React.FC<{ length?: number; maxLength?: number }> = ({ length = 0, maxLength = 6 }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-6 bg-white">
            <div className="flex gap-4">
                {[...Array(maxLength)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full transition-colors duration-200
                            ${i < length ? 'bg-[#ff6600]' : 'bg-gray-300'}
                        `}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export const DateRangeInput: React.FC<{ startLabel?: string; endLabel?: string; startDate?: string; endDate?: string }> = ({ 
    startLabel = "시작일(00시)", endLabel = "종료일(24시)", startDate, endDate 
}) => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-2">
                <div className="flex-1">
                     <label className="block text-xs mb-1.5 font-medium text-gray-500">{startLabel}</label>
                     <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-between bg-white">
                        <input type="text" placeholder="날짜 입력" defaultValue={startDate} className="w-full text-sm outline-none" />
                        <span className="text-gray-400">📅</span>
                     </div>
                </div>
                <div className="flex-1">
                     <label className="block text-xs mb-1.5 font-medium text-gray-500">{endLabel}</label>
                     <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-between bg-white">
                        <input type="text" placeholder="날짜 입력" defaultValue={endDate} className="w-full text-sm outline-none" />
                        <span className="text-gray-400">📅</span>
                     </div>
                </div>
            </div>
            <p className="text-[11px] text-gray-500 mt-2">
                • 신청기간 시작일의 00시부터 종료일 24시까지 변경내용의 효력이 발생합니다.
            </p>
        </div>
    );
};

export const SearchInput: React.FC<{ placeholder?: string; value?: string }> = ({ placeholder = '검색어를 입력해 주세요', value }) => (
  <div className="flex items-center w-full h-10 px-4 rounded-full bg-[#f5f5f5] border border-transparent focus-within:border-gray-400 transition-colors">
    <input 
        type="text" 
        placeholder={placeholder} 
        defaultValue={value}
        className="bg-transparent border-none outline-none w-full text-sm placeholder-gray-400 text-gray-800" 
    />
    <Search size={18} className="text-gray-400 ml-2 shrink-0 cursor-pointer" />
  </div>
);

export const TextareaField: React.FC<{
    label: string;
    placeholder?: string;
    maxLength?: number;
    value?: string;
    helperText?: string;
}> = ({ label, placeholder, maxLength = 1000, value = '', helperText }) => {
    const [currentLength, setCurrentLength] = useState(value.length);
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-medium text-gray-500">{label}</label>
                {maxLength > 0 && <span className="text-[11px] text-gray-400">{currentLength.toLocaleString()}/{maxLength.toLocaleString()}글자</span>}
            </div>
            <div className="w-full border border-gray-300 rounded p-3 bg-white focus-within:border-[#333] transition-colors">
                <textarea 
                    className="w-full h-24 resize-none outline-none text-sm text-gray-900 placeholder-gray-300 bg-transparent"
                    placeholder={placeholder}
                    maxLength={maxLength}
                    defaultValue={value}
                    onChange={(e) => setCurrentLength(e.target.value.length)}
                />
            </div>
            {helperText && <ul className="list-disc pl-3 mt-2"><li className="text-[11px] text-gray-500 leading-snug">{helperText}</li></ul>}
        </div>
    )
}

export const UnitInput: React.FC<{ label?: string; unit: string; placeholder?: string; value?: string }> = ({ label, unit, placeholder, value }) => (
    <div className="w-full">
        {label && <label className="block text-xs mb-1.5 font-medium text-gray-500">{label}</label>}
        <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center bg-white focus-within:border-[#ff6600]">
            <input 
                type="text" 
                defaultValue={value} 
                className="w-full text-right outline-none text-sm font-medium bg-transparent placeholder-gray-300" 
                placeholder={placeholder}
            />
            <span className="text-sm text-gray-800 ml-2 font-medium shrink-0">{unit}</span>
        </div>
    </div>
);

export const FloorInput: React.FC = () => {
  const [type, setType] = useState('지상');
  return (
    <div className="flex gap-2 h-10">
        <div className="flex-1 border border-gray-300 rounded px-3 flex items-center bg-white">
            <input type="text" defaultValue="1" className="w-full text-right font-bold outline-none text-sm" />
            <span className="ml-2 text-xs text-gray-500">층</span>
        </div>
        <div className="flex bg-gray-100 rounded p-1 gap-1">
            {['지상', '지하'].map(t => (
                <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-3 text-xs rounded font-bold transition-colors ${type === t ? 'bg-white text-[#ff6600] shadow-sm border border-gray-200' : 'text-gray-400'}`}
                >
                    {t}
                </button>
            ))}
        </div>
    </div>
  )
}

export const Keypad: React.FC = () => (
  <div className="bg-[#eef0f4] p-2 grid grid-cols-4 gap-1 mt-4 rounded-md">
    {[1, 2, 3, '', 4, 5, 6, '', 7, 8, 9, '', '입력완료', 0, '←', ''].map((key, i) => (
      <div key={i} className={`
        flex items-center justify-center h-12 rounded shadow-sm text-lg font-medium
        ${key === '' ? 'invisible' : 'visible'}
        ${key === '입력완료' ? 'bg-[#2c3e50] text-white text-xs col-span-1' : 'bg-white text-gray-800'}
      `}>
        {key}
      </div>
    ))}
  </div>
);

export const TimePicker: React.FC = () => (
  <div className="w-full">
    <div className="flex gap-2 mb-4">
        <button className="flex-1 border border-[#ff6600] bg-[#fff5eb] text-[#ff6600] py-3 rounded-md font-bold text-sm">오전 09시</button>
        <button className="flex-1 border border-gray-300 bg-white text-gray-400 py-3 rounded-md text-sm">오후 07시</button>
    </div>
    <div className="flex justify-center items-center gap-8 py-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="flex flex-col gap-2 items-center">
            <span className="text-gray-300 text-sm">오후</span>
            <span className="text-[#ff6600] font-bold text-lg border-y border-[#ff6600] py-1 px-4 bg-white">오전</span>
            <span className="text-gray-300 text-sm">--</span>
        </div>
        <div className="h-20 w-[1px] bg-gray-200"></div>
        <div className="flex flex-col gap-2 items-center">
            <span className="text-gray-300 text-sm">08</span>
            <span className="text-[#ff6600] font-bold text-lg border-y border-[#ff6600] py-1 px-4 bg-white">09</span>
            <span className="text-gray-300 text-sm">10</span>
        </div>
    </div>
  </div>
);

export const DateTimeGroup: React.FC = () => (
    <div className="flex gap-2 items-end">
      <div className="flex-1">
          <label className="block text-xs mb-1.5 font-medium text-gray-500">대여종료일</label>
          <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-between bg-white">
              <input type="text" placeholder="YYYYMMDD" className="outline-none text-sm w-full"/>
              <span className="text-gray-400 text-lg">📅</span>
          </div>
      </div>
      <div className="flex-1">
           <div className="w-full border border-gray-300 rounded px-3 h-10 bg-white flex justify-between items-center cursor-pointer hover:border-gray-400">
                <span className="text-gray-900 text-sm">00시 00분</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
      </div>
    </div>
);

export const FileUploadBox: React.FC<{ state: 'empty' | 'filled' }> = ({ state }) => (
    <div className="w-full">
      <div className={`w-full h-36 border ${state === 'empty' ? 'border-dashed border-gray-300' : 'border-solid border-gray-200'} rounded-lg bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden`}>
         {state === 'filled' && (
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center flex-col gap-2">
                 <ImageIcon size={32} className="text-gray-400"/>
                 <span className="text-xs text-gray-500">등록한 이미지</span>
             </div>
         )}
         {state === 'empty' && <div className="text-gray-400 text-xs mb-3">샘플 이미지</div>}
         
         <div className="absolute bottom-3 flex gap-2 w-[90%] justify-center">
            {state === 'empty' ? (
                <>
                  <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 등록</button>
                  <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 촬영</button>
                </>
            ) : (
                <>
                  <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 변경</button>
                  <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">재촬영</button>
                </>
            )}
         </div>
      </div>
    </div>
  );

export const CalendarView: React.FC = () => (
    <div className="w-full max-w-[320px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-center relative p-4 border-b border-gray-100">
            <ChevronLeft size={20} className="absolute left-4 text-gray-400" />
            <span className="text-lg font-bold text-gray-900">2025.01</span>
            <ChevronRight size={20} className="absolute right-4 text-gray-400" />
        </div>
        
        {/* Days Header */}
        <div className="grid grid-cols-7 text-center py-2 border-b border-gray-50">
            {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
                <div key={i} className={`text-xs font-medium ${i === 0 ? 'text-red-500' : 'text-gray-500'}`}>{day}</div>
            ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-center p-2 gap-y-1">
            {/* Empty cells for previous month */}
            {[...Array(3)].map((_, i) => <div key={`empty-${i}`} className="p-2"></div>)}
            
            {/* Days */}
            {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isSelected = day === 15;
                const isToday = day === 1;
                
                return (
                    <div key={day} className="flex items-center justify-center aspect-square">
                        <div className={`
                            w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer transition-colors
                            ${isSelected ? 'bg-[#ff6600] text-white font-bold' : ''}
                            ${!isSelected && isToday ? 'text-[#ff6600] font-bold' : ''}
                            ${!isSelected && !isToday ? 'hover:bg-gray-100' : ''}
                            ${!isSelected && !isToday && (i + 4) % 7 === 0 ? 'text-red-500' : ''}
                        `}>
                            {day}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export const AreaInput: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex-1 relative">
                <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-between bg-white">
                    <input type="text" defaultValue="68.77" className="w-full text-right outline-none text-sm font-bold" />
                    <span className="text-xs text-gray-500 ml-1">㎡</span>
                </div>
            </div>
            <div className="flex-1 relative">
                <div className="w-full h-10 border border-gray-300 rounded px-3 flex items-center justify-between bg-gray-50">
                    <input type="text" defaultValue="21.00" readOnly className="w-full text-right outline-none bg-transparent text-sm text-gray-600" />
                    <span className="text-xs text-gray-500 ml-1">평</span>
                </div>
            </div>
        </div>
    );
}

export const DoubleUnitInput: React.FC<{ 
    label1: string; unit1: string; value1?: string; 
    label2: string; unit2: string; value2?: string;
}> = ({ label1, unit1, value1, label2, unit2, value2 }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-1">
                <label className="block text-xs mb-1.5 font-medium text-gray-500">{label1}</label>
                <div className="w-full h-10 border border-gray-300 rounded-md px-3 flex items-center bg-white">
                    <input 
                        type="text" 
                        defaultValue={value1} 
                        className="w-full text-right outline-none text-sm font-medium bg-transparent placeholder-gray-300" 
                        placeholder="0" 
                    />
                    <span className="text-sm text-gray-800 ml-2 font-medium">{unit1}</span>
                </div>
            </div>
            <div className="flex-1">
                <label className="block text-xs mb-1.5 font-medium text-gray-500">{label2}</label>
                <div className="w-full h-10 border border-gray-300 rounded-md px-3 flex items-center bg-white">
                    <input 
                        type="text" 
                        defaultValue={value2} 
                        className="w-full text-right outline-none text-sm font-medium bg-transparent placeholder-gray-300" 
                        placeholder="0" 
                    />
                    <span className="text-sm text-gray-800 ml-2 font-medium">{unit2}</span>
                </div>
            </div>
        </div>
    );
};

export const AutocompleteInput: React.FC<{ 
    label: string; 
    placeholder: string; 
    suggestions: string[];
    defaultValue?: string;
}> = ({ label, placeholder, suggestions, defaultValue = '' }) => {
    const [query, setQuery] = useState(defaultValue);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const filtered = suggestions.filter(s => s.includes(query) && query !== '');

    return (
        <div className="relative w-full">
            <label className="block text-xs mb-1.5 font-medium text-gray-500">{label}</label>
            <div className={`
                flex items-center border rounded-md px-3 h-10 bg-white transition-colors
                ${showSuggestions ? 'border-gray-800 ring-1 ring-gray-800' : 'border-gray-300'}
            `}>
                <input 
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
                    className="w-full outline-none text-[15px] text-gray-900 bg-transparent placeholder-gray-300"
                />
                <Search size={18} className="text-gray-400 shrink-0" />
            </div>
            
            {showSuggestions && query && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-20 max-h-48 overflow-y-auto mt-1">
                    {filtered.length > 0 ? (
                        filtered.map((item, i) => (
                            <div 
                                key={i} 
                                className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                                onClick={() => { setQuery(item); setShowSuggestions(false); }}
                            >
                                <span className="text-[#ff6600] font-bold">{query}</span>{item.replace(query, '')}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-xs text-gray-400">검색 결과가 없습니다.</div>
                    )}
                </div>
            )}
        </div>
    );
};

// --- Selection Components ---

export const AmountSelect: React.FC<{ value: string }> = ({ value }) => (
    <div className="w-full border border-gray-300 rounded px-3 py-3 bg-white flex justify-between items-center cursor-pointer hover:border-gray-400">
        <span className="font-bold text-gray-900 text-sm">{value}</span>
        <ChevronDown size={20} className="text-gray-400"/>
    </div>
);

export const DropdownList: React.FC<{ options: string[]; selected?: string }> = ({ options, selected }) => (
    <div className="w-full border border-gray-300 rounded bg-white shadow-lg overflow-hidden mt-1 z-10">
        {options.map((opt, idx) => (
            <div 
                key={idx} 
                className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 border-b border-gray-50 last:border-0 flex justify-between items-center
                    ${opt === selected ? 'text-[#ff6600] font-bold bg-[#fff5eb]' : 'text-gray-700'}
                `}
            >
                {opt}
                {opt === selected && <Check size={16} className="text-[#ff6600]" />}
            </div>
        ))}
    </div>
);

export const InstallmentSelection: React.FC = () => (
    <div className="grid grid-cols-3 gap-2 w-full">
       {['일시납', '2회납', '3회납', '4회납', '5회납', '6회납'].map((t, i) => (
           <button key={i} className={`border rounded-lg p-3 text-center text-xs hover:bg-gray-50 transition-colors flex flex-col items-center justify-center h-14 ${i===0 ? 'border-[#ff6600] text-[#ff6600] font-bold bg-[#fff5eb]' : 'border-gray-300 text-gray-600 bg-white'}`}>
              <div className="mb-0.5">{t}</div>
              {i > 0 && <div className="text-[10px] text-gray-400 font-normal">(자동이체)</div>}
           </button>
       ))}
    </div>
);

export const TermsAgreement: React.FC<{
    items: { label: string; required?: boolean; checked?: boolean }[];
    allChecked?: boolean;
}> = ({ items, allChecked = false }) => {
    return (
        <div className="w-full border border-gray-300 rounded-lg overflow-hidden bg-white">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center gap-3 bg-white cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${allChecked ? 'bg-[#ff6600] border-[#ff6600]' : 'border-gray-300'}`}>
                    {allChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                </div>
                <span className={`font-bold text-sm ${allChecked ? 'text-[#222]' : 'text-gray-700'}`}>아래 항목 모두 동의합니다.</span>
            </div>
            
            {/* List */}
            <div className="p-4 flex flex-col gap-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${item.checked ? 'bg-[#ff6600] border-[#ff6600]' : 'border-gray-300'}`}>
                                {item.checked && <Check size={12} className="text-white" strokeWidth={3} />}
                            </div>
                            <span className={`text-sm ${item.checked ? 'text-[#222]' : 'text-gray-600'}`}>
                                {item.required && <span className="text-[#ff6600] mr-1">[필수]</span>}
                                {item.label}
                            </span>
                        </div>
                        <span className="text-xs text-gray-400 underline cursor-pointer">보기</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const CoverageAmountRadio: React.FC = () => (
    <div className="flex flex-col gap-3 w-full">
       {[
         { val: '200만원', badge: '추천', sub: '18.9% Best 1', active: true },
         { val: '150만원' },
         { val: '100만원' },
         { val: '50만원' }
       ].map((item, i) => (
           <div key={i} className="flex items-center gap-3 cursor-pointer">
               <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${item.active ? 'border-[#ff6600]' : 'border-gray-300'}`}>
                   {item.active && <div className="w-2.5 h-2.5 rounded-full bg-[#ff6600]"></div>}
               </div>
               <span className="text-sm font-medium text-gray-800">{item.val}</span>
               {item.badge && <span className="bg-[#007aff] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{item.badge}</span>}
               {item.sub && <span className="bg-[#8bc34a] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{item.sub}</span>}
           </div>
       ))}
    </div>
 );

export const RadioGroup: React.FC<{ 
    options: { label: string; value: string; disabled?: boolean; badge?: string; description?: string }[] | string[]; 
    name: string; 
    value?: string;
    type?: 'list' | 'box'; 
    direction?: 'row' | 'col';
    onChange?: (val: string) => void;
}> = ({ options, name, value, type = 'list', direction = 'col', onChange }) => {
  return (
    <div className={`flex ${type === 'box' ? 'gap-2' : (direction === 'row' ? 'flex-row gap-6' : 'flex-col gap-3')}`}>
      {options.map((opt, idx) => {
        const itemLabel = typeof opt === 'string' ? opt : opt.label;
        const itemValue = typeof opt === 'string' ? opt : opt.value;
        const isDisabled = typeof opt !== 'string' && opt.disabled;
        const badge = typeof opt !== 'string' ? opt.badge : undefined;
        const description = typeof opt !== 'string' ? opt.description : undefined;
        const isChecked = value === itemValue;

        return (
            <label key={idx} className={`flex items-center group relative
                ${type === 'box' ? 'flex-1 border rounded-md py-3 px-3 transition-all' : ''}
                ${type === 'box' && direction === 'col' ? 'flex-row text-left justify-start' : (type === 'box' ? 'flex-col justify-center text-center' : '')}
                ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                ${type === 'box' && isChecked ? 'border-[#ff6600] bg-[#fff5eb]' : ''}
                ${type === 'box' && !isChecked ? 'border-gray-300 bg-white' : ''}
            `}>
            {badge && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#ffcc00] text-black text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap z-10 font-bold shadow-sm">
                    {badge}
                </span>
            )}
            
            {/* Box Type - Custom Layout for Description */}
            {type === 'box' && description ? (
                <div className="flex flex-col items-start w-full">
                    <span className={`text-sm mb-1 ${isChecked ? 'font-bold text-gray-900' : 'text-gray-800'}`}>{itemLabel}</span>
                    <span className={`text-xs ${isChecked ? 'text-gray-700' : 'text-gray-500'}`}>{description}</span>
                </div>
            ) : (
                <>
                    <div className={`relative w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-colors shrink-0
                        ${isChecked ? 'border-[#ff6600] bg-white' : 'border-gray-300 bg-white'}
                        ${!isDisabled && !isChecked ? 'group-hover:border-gray-400' : ''}
                        ${isDisabled ? 'bg-gray-100 border-gray-200' : ''}
                        ${type === 'box' ? 'hidden' : ''} 
                    `}>
                        {isChecked && <div className={`w-[10px] h-[10px] rounded-full ${isDisabled ? 'bg-gray-400' : 'bg-[#ff6600]'}`}></div>}
                    </div>
                    <span className={`ml-2 text-sm ${isChecked ? 'font-bold text-gray-900' : 'text-gray-700'} ${isDisabled ? 'text-gray-400' : ''}`}>
                        {itemLabel}
                    </span>
                </>
            )}
            
            <input type="radio" name={name} value={itemValue} checked={isChecked} disabled={isDisabled} onChange={() => onChange && onChange(itemValue)} className="hidden"/>
            </label>
        );
      })}
    </div>
  );
};

export const OptionCard: React.FC<{
    title: string;
    checked?: boolean;
    badge?: string;
    price?: string;
    children?: React.ReactNode;
}> = ({ title, checked, badge, price, children }) => {
    const [isChecked, setIsChecked] = useState(checked);
    return (
        <div className={`border rounded-lg mb-3 overflow-hidden bg-white transition-all ${isChecked ? 'border-[#ff6600] ring-1 ring-[#ff6600]' : 'border-gray-200'}`}>
            <div className="p-4 flex items-start gap-3 cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
                <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isChecked ? 'bg-[#ff6600] border-[#ff6600]' : 'bg-white border-gray-300'}`}>
                    {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {badge && <span className="bg-[#ffcc00] text-black text-[10px] px-1.5 py-0.5 rounded font-bold">{badge}</span>}
                        <span className={`text-sm font-bold ${isChecked ? 'text-gray-900' : 'text-gray-700'}`}>{title}</span>
                    </div>
                    {price && <div className="text-right font-bold text-sm text-gray-900">{price}</div>}
                </div>
                {children && <ChevronDown size={20} className={`text-gray-400 transition-transform ${isChecked ? 'rotate-180' : ''}`} />}
            </div>
            {isChecked && children && (
                <div className="bg-gray-50 border-t border-gray-100 p-4 text-sm text-gray-600 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export const ImageRadioGroup: React.FC<{ items: { label: string; icon?: React.ReactNode; image?: string }[] }> = ({ items }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`flex ${items[0].image ? 'flex-row gap-2' : 'flex-col gap-2'}`}>
      {items.map((item, idx) => (
        <div 
          key={idx} 
          onClick={() => setSelected(idx)}
          className={`
            border rounded-lg cursor-pointer transition-all relative overflow-hidden
            ${selected === idx ? 'border-[#ff6600] ring-1 ring-[#ff6600] bg-[#fff5eb]' : 'border-gray-200 bg-white hover:border-gray-300'}
            ${items[0].image ? 'flex-1 aspect-square flex flex-col' : 'flex items-center p-3'}
          `}
        >
          {selected === idx && <div className="absolute top-2 left-2 w-4 h-4 bg-[#ff6600] rounded-full flex items-center justify-center z-10"><Check size={10} className="text-white"/></div>}
          
          {item.image ? (
             <>
               <div className="flex-1 bg-gray-100 bg-cover bg-center" style={{backgroundImage: `url(${item.image})`}}></div>
               <div className="p-2 text-center text-xs font-medium text-gray-700 border-t border-gray-100">{item.label}</div>
             </>
          ) : (
             <>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-gray-400">
                    {item.icon || <Camera size={20} />}
                </div>
                <span className={`flex-1 text-sm ${selected === idx ? 'font-bold text-[#ff6600]' : 'text-gray-700'}`}>{item.label}</span>
                <ChevronRight size={16} className="text-gray-300" />
             </>
          )}
        </div>
      ))}
    </div>
  );
};

export const SegmentControl: React.FC<{ options: string[]; activeIndex?: number; disabled?: boolean }> = ({ options, activeIndex = 0, disabled }) => {
  return (
    <div className={`flex w-full border rounded overflow-hidden ${disabled ? 'border-gray-200' : 'border-gray-300'}`}>
      {options.map((opt, idx) => (
        <div 
          key={idx} 
          className={`flex-1 py-2 text-center text-sm cursor-pointer border-l first:border-l-0 text-[13px]
            ${disabled ? 'bg-gray-50 text-gray-300 cursor-not-allowed border-gray-200' : ''}
            ${!disabled && idx === activeIndex ? 'bg-[#ff6600] text-white font-bold border-[#ff6600]' : ''}
            ${!disabled && idx !== activeIndex ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50' : ''}
          `}
        >
          {opt}
        </div>
      ))}
    </div>
  );
};

export const Checkbox: React.FC<{ label: string; subLabel?: string; checked?: boolean; required?: boolean; disabled?: boolean }> = ({ label, subLabel, checked, required, disabled }) => (
  <label className={`flex items-start gap-2 py-0.5 group ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
    <div className={`w-[20px] h-[20px] rounded-[2px] border flex items-center justify-center shrink-0 mt-0.5 transition-colors
      ${checked && !disabled ? 'bg-[#ff6600] border-[#ff6600]' : ''}
      ${!checked && !disabled ? 'bg-white border-gray-300 group-hover:border-gray-400' : ''}
      ${disabled ? 'bg-gray-100 border-gray-200' : ''}
    `}>
      {checked && <Check className={`w-3.5 h-3.5 ${disabled ? 'text-gray-300' : 'text-white'}`} strokeWidth={3} />}
    </div>
    <div className="flex flex-col">
      <span className={`text-sm ${checked ? 'font-bold' : ''} ${disabled ? 'text-gray-300' : 'text-gray-900'}`}>
        {required && <span className={`${disabled ? 'text-gray-300' : 'text-[#ff6600]'} mr-1`}>[필수]</span>}
        {label}
      </span>
      {subLabel && <span className={`text-[11px] mt-0.5 ${disabled ? 'text-gray-300' : 'text-gray-400'}`}>{subLabel}</span>}
    </div>
  </label>
);

export const CoverageCheckItem: React.FC<{ title: string; desc?: string; amount: string; checked?: boolean }> = ({ title, desc, amount, checked }) => {
    const [isChecked, setIsChecked] = useState(checked);
    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-start gap-3 flex-1">
                <div 
                    onClick={() => setIsChecked(!isChecked)}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 cursor-pointer transition-colors
                        ${isChecked ? 'bg-[#ff6600] border-[#ff6600]' : 'bg-white border-gray-300'}
                    `}
                >
                    {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                </div>
                <div className="flex flex-col">
                    <span className={`text-sm ${isChecked ? 'font-bold text-gray-900' : 'text-gray-500'}`}>{title}</span>
                    {desc && <span className="text-[11px] text-gray-400 mt-0.5">{desc}</span>}
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isChecked ? 'text-gray-900' : 'text-gray-300'}`}>{amount}</span>
                <ChevronRight size={16} className="text-gray-400 cursor-pointer" />
            </div>
        </div>
    )
}

export const Switch: React.FC<{ label?: string, checked?: boolean, disabled?: boolean }> = ({ label, checked, disabled }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 w-full">
    {label && <span className={`text-sm ${disabled ? 'text-gray-300' : 'text-gray-800'}`}>{label}</span>}
    <div className={`w-10 h-[22px] rounded-full p-0.5 transition-colors relative
      ${disabled ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer'}
      ${!disabled && checked ? 'bg-[#ff6600]' : ''}
      ${!disabled && !checked ? 'bg-gray-300' : ''}
    `}>
      <div className={`bg-white w-[18px] h-[18px] rounded-full shadow-sm absolute top-0.5 transition-all
        ${checked ? 'left-[20px]' : 'left-[2px]'}
        ${disabled ? 'shadow-none bg-gray-200' : ''}
      `}></div>
    </div>
  </div>
);

export const Dropdown: React.FC<{ value: string; placeholder?: string }> = ({ value, placeholder }) => (
  <div className="w-full border border-gray-300 rounded px-3 py-2 bg-white flex justify-between items-center cursor-pointer hover:border-gray-400">
    <span className={value ? "text-gray-900 text-sm" : "text-gray-400 text-sm"}>{value || placeholder}</span>
    <ChevronDown className="w-4 h-4 text-gray-400" />
  </div>
);

export const Tag: React.FC<{ text: string; active?: boolean }> = ({ text, active }) => (
  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium border mr-1.5 mb-1.5 cursor-pointer
    ${active 
      ? 'bg-[#fff5eb] text-[#ff6600] border-[#ff6600] font-bold' 
      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}
  `}>
    #{text}
  </span>
);

export const SelectionButtonGroup: React.FC<{ options: string[] }> = ({ options }) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt, i) => {
        const isActive = selected.includes(opt);
        return (
            <button 
                key={i} 
                onClick={() => setSelected(prev => prev.includes(opt) ? prev.filter(p => p !== opt) : [...prev, opt])}
                className={`px-3 py-2 rounded border text-sm transition-all
                    ${isActive 
                        ? 'border-[#ff6600] text-[#ff6600] bg-[#fff5eb] font-bold' 
                        : 'border-gray-300 text-gray-600 bg-white hover:bg-gray-50'}
                `}
            >
                {opt}
            </button>
        );
      })}
    </div>
  )
};

// --- Action Components ---

export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dashed' | 'input'; 
  size?: 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}> = ({ children, variant = 'primary', size = 'md', disabled, active, onClick }) => {
  const baseStyle = "rounded transition-colors flex items-center justify-center font-bold";
  const variants = {
    primary: "bg-[#ff6600] text-white hover:bg-[#e65c00] disabled:bg-[#ccc] disabled:text-white border-none",
    secondary: "bg-white text-[#333] border border-[#ccc] hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",
    outline: "border border-[#ff6600] text-[#ff6600] bg-white hover:bg-orange-50 disabled:border-gray-300 disabled:text-gray-300",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
    dashed: "bg-white text-[#666] border border-dashed border-[#999] hover:bg-gray-50 font-normal",
    input: `bg-white text-[12px] border ${active ? 'border-[#ff6600] text-[#ff6600]' : 'border-[#ddd] text-[#333]'} hover:bg-gray-50`
  };
  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-4 py-3 text-sm rounded-md",
    lg: "px-6 py-3.5 text-[15px] rounded-md",
    full: "w-full py-3.5 text-[15px] rounded-md"
  };

  return (
    <button 
      disabled={disabled} 
      onClick={onClick} 
      className={`
        ${baseStyle} 
        ${variants[variant]} 
        ${variant === 'input' ? 'px-2.5 py-1.5' : sizes[size]}
      `}
    >
      {children}
    </button>
  );
};

export const SplitButtonGroup: React.FC = () => (
    <div className="flex w-full">
       <button className="flex-1 bg-[#666] text-white py-3.5 text-sm font-bold rounded-l-md border-r border-gray-500 hover:bg-gray-600">그대로 진행</button>
       <button className="flex-1 bg-[#ff6600] text-white py-3.5 text-sm font-bold rounded-r-md hover:bg-orange-600">보험기간 변경진행</button>
    </div>
);

export const LinkText: React.FC<{ text: string; icon?: 'arrow' | 'download' | 'none'; type?: 'primary' | 'default' }> = ({ text, icon = 'none', type = 'default' }) => {
    return (
        <span className={`inline-flex items-center gap-1 cursor-pointer border-b border-transparent hover:border-current transition-colors
            ${type === 'primary' ? 'text-[#007aff]' : 'text-[#333] underline'}
        `}>
            {text}
            {icon === 'arrow' && <ChevronRight size={14} />}
            {icon === 'download' && <ChevronDown size={14} />}
        </span>
    )
}

export const FileButton: React.FC<{ type: 'pdf' | 'doc' | 'view'; label?: string }> = ({ type, label }) => {
    const icon = type === 'pdf' ? <Download size={14}/> : type === 'doc' ? <Download size={14}/> : <Eye size={14}/>;
    const text = label || (type === 'pdf' ? 'PDF' : type === 'doc' ? 'DOC' : '샘플보기');
    return (
        <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded bg-white text-xs text-gray-700 hover:bg-gray-50 font-medium">
            <span className="font-bold">{text}</span>
            {icon}
        </button>
    )
}

export const BoxLink: React.FC<{ title: string; linkText: string }> = ({ title, linkText }) => (
    <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col gap-2 cursor-pointer hover:border-gray-400 transition-colors w-full">
        <span className="text-xs text-gray-500">{title}</span>
        <div className="flex items-center justify-between">
            <span className="text-[#007aff] font-bold text-sm">{linkText}</span>
            <ArrowUpRight size={16} className="text-[#007aff]" />
        </div>
    </div>
)

// --- Display Components ---

export const TabGroup: React.FC<{ tabs: string[] }> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex border-b border-gray-200 w-full mb-4">
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2
            ${active === i ? 'border-gray-900 text-gray-900 font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export const DataTable: React.FC = () => (
  <div className="w-full border-t border-gray-300 text-xs">
    <div className="flex bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
      <div className="w-1/4 p-2">구분</div>
      <div className="w-1/4 p-2 text-right">자기신체</div>
      <div className="w-1/4 p-2 text-right">자동차상해</div>
      <div className="w-1/4 p-2 text-center">변경</div>
    </div>
    <div className="flex border-b border-gray-200 items-center">
      <div className="w-1/4 p-2 text-gray-600">가입금액</div>
      <div className="w-1/4 p-2 text-right">1억원</div>
      <div className="w-1/4 p-2 text-right">3,000만원</div>
      <div className="w-1/4 p-2 text-center"><button className="border border-gray-300 px-2 py-1 rounded bg-white">변경</button></div>
    </div>
    <div className="flex border-b border-gray-200 items-center">
      <div className="w-1/4 p-2 text-gray-600">부상</div>
      <div className="w-1/4 p-2 text-right">1,500만원</div>
      <div className="w-1/4 p-2 text-right">3,000만원</div>
      <div className="w-1/4 p-2 text-center"><button className="border border-gray-300 px-2 py-1 rounded bg-white">변경</button></div>
    </div>
  </div>
);

export const InsuranceTablePC: React.FC = () => (
    <div className="w-full overflow-x-auto border border-gray-300 rounded">
      <table className="w-full min-w-[800px] text-xs">
        <thead className="bg-gray-100 text-gray-700 font-bold border-b border-gray-300">
          <tr>
            <th className="p-3 w-10 text-center"><input type="checkbox"/></th>
            <th className="p-3 text-left">차량번호</th>
            <th className="p-3">대인</th>
            <th className="p-3">대인II</th>
            <th className="p-3">대물</th>
            <th className="p-3">자기신체<br/>(자상)</th>
            <th className="p-3">무보험차</th>
            <th className="p-3">자기차량</th>
            <th className="p-3">긴급출동</th>
            <th className="p-3">관리</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border-b border-gray-200">
             <td className="p-3 text-center"><input type="checkbox" checked/></td>
             <td className="p-3">
                 <div className="font-bold text-gray-900">111가1111</div>
                 <div className="text-[#ff6600] font-bold">1,234,567원</div>
             </td>
             <td className="p-3 text-center">가입</td>
             <td className="p-3 text-center">무한</td>
             <td className="p-3 text-center">10억</td>
             <td className="p-3 text-center">5천/3천</td>
             <td className="p-3 text-center">2억</td>
             <td className="p-3 text-center">가입</td>
             <td className="p-3 text-center">하이카<br/>10KM</td>
             <td className="p-3 text-center">
                 <button className="bg-[#007aff] text-white px-2 py-1 rounded text-xs">조회/변경</button>
             </td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
             <td className="p-3 text-center"><input type="checkbox"/></td>
             <td className="p-3">
                 <div className="font-bold text-gray-900">222나2222</div>
                 <div className="text-[#ff6600] font-bold">1,234,567원</div>
             </td>
             <td className="p-3 text-center">가입</td>
             <td className="p-3 text-center">무한</td>
             <td className="p-3 text-center">10억</td>
             <td className="p-3 text-center">5천/3천</td>
             <td className="p-3 text-center">2억</td>
             <td className="p-3 text-center">가입</td>
             <td className="p-3 text-center">하이카<br/>10KM</td>
             <td className="p-3 text-center">
                 <button className="bg-[#007aff] text-white px-2 py-1 rounded text-xs">조회/변경</button>
             </td>
          </tr>
        </tbody>
      </table>
    </div>
);

export const ComparisonTable: React.FC = () => (
    <div className="w-full overflow-x-auto">
        <table className="w-full text-xs text-center border-t border-gray-300 min-w-[320px]">
            <thead className="bg-gray-50 text-gray-700 font-bold">
                <tr>
                    <th className="py-2 px-1 border-b border-gray-200 w-1/4 text-left pl-2">보장 담보명</th>
                    <th className="py-2 px-1 border-b border-gray-200 w-1/4">실속형</th>
                    <th className="py-2 px-1 border-b border-gray-200 w-1/4 text-[#ff6600]">표준형</th>
                    <th className="py-2 px-1 border-b border-gray-200 w-1/4">고급형</th>
                </tr>
            </thead>
            <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                    <td className="py-3 px-1 text-left pl-2 font-medium">반려견치료비<br/>(1일한도)</td>
                    <td className="py-3 px-1 bg-gray-50/50">150만원</td>
                    <td className="py-3 px-1 font-bold text-gray-900 bg-[#fff5eb]/30">200만원</td>
                    <td className="py-3 px-1">250만원</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <td className="py-3 px-1 text-left pl-2 font-medium">슬관절 확장</td>
                    <td className="py-3 px-1 bg-gray-50/50">100만원</td>
                    <td className="py-3 px-1 font-bold text-gray-900 bg-[#fff5eb]/30">100만원</td>
                    <td className="py-3 px-1">100만원</td>
                </tr>
                <tr className="border-b border-gray-100">
                    <td className="py-3 px-1 text-left pl-2 font-medium">피부질환보장</td>
                    <td className="py-3 px-1 bg-gray-50/50">50만원</td>
                    <td className="py-3 px-1 font-bold text-gray-900 bg-[#fff5eb]/30">100만원</td>
                    <td className="py-3 px-1">200만원</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const PlanCarousel: React.FC<{
    plans: { name: string; price: string; features: string[]; recommended?: boolean }[] 
}> = ({ plans }) => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar -mx-4 px-4 snap-x">
            {plans.map((plan, i) => (
                <div 
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`min-w-[140px] border rounded-lg p-4 snap-center relative transition-all bg-white cursor-pointer flex flex-col
                        ${selected === i ? 'border-[#ff6600] ring-1 ring-[#ff6600] z-10' : 'border-gray-200'}
                    `}
                >
                    {plan.recommended && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#ff6600] text-white text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap">추천</span>}
                    <div className={`text-center mb-3 ${selected === i ? 'opacity-100' : 'opacity-70'}`}>
                        <div className="text-sm font-bold mb-1">{plan.name}</div>
                        <div className={`text-lg font-bold ${selected === i ? 'text-[#ff6600]' : 'text-gray-900'}`}>{plan.price}</div>
                    </div>
                    <div className="border-t border-dashed border-gray-200 my-2"></div>
                    <ul className="space-y-1">
                        {plan.features.map((f, idx) => (
                            <li key={idx} className="text-[11px] text-gray-500 text-center truncate">{f}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export const ListRow: React.FC<{ text: string; subText?: string }> = ({ text, subText }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
    <div className="flex flex-col">
      <span className="text-sm text-gray-800">{text}</span>
      {subText && <span className="text-xs text-gray-500 mt-0.5">{subText}</span>}
    </div>
    <ChevronRight size={16} className="text-gray-400" />
  </div>
);

export const HierarchyList: React.FC = () => (
    <div className="flex w-full gap-2 overflow-x-auto">
        <div className="w-40 border border-gray-200 rounded bg-white shrink-0 h-64 overflow-y-auto">
            <div className="p-3 text-xs font-bold bg-gray-50 border-b border-gray-100">제조사</div>
            {['현대', '기아', '르노삼성', '쉐보레', 'KG모빌리티', '외제차'].map((item, i) => (
                <div key={i} className={`p-3 text-sm cursor-pointer border-b border-gray-50 ${i===0 ? 'text-[#ff6600] font-bold bg-[#fff5eb]' : 'text-gray-700 hover:bg-gray-50'}`}>{item}</div>
            ))}
        </div>
        <div className="w-40 border border-gray-200 rounded bg-white shrink-0 h-64 overflow-y-auto">
            <div className="p-3 text-xs font-bold bg-gray-50 border-b border-gray-100">차종</div>
            {['EV3', 'EV6', 'EV9', 'K3', 'K5', 'K7'].map((item, i) => (
                <div key={i} className={`p-3 text-sm cursor-pointer border-b border-gray-50 ${i===1 ? 'text-[#ff6600] font-bold bg-[#fff5eb]' : 'text-gray-700 hover:bg-gray-50'}`}>{item}</div>
            ))}
        </div>
         <div className="w-40 border border-gray-200 rounded bg-white shrink-0 h-64 overflow-y-auto">
            <div className="p-3 text-xs font-bold bg-gray-50 border-b border-gray-100">연식</div>
            {['2025년', '2024년', '2023년'].map((item, i) => (
                <div key={i} className={`p-3 text-sm cursor-pointer border-b border-gray-50 ${i===0 ? 'text-[#ff6600] font-bold bg-[#fff5eb]' : 'text-gray-700 hover:bg-gray-50'}`}>{item}</div>
            ))}
        </div>
    </div>
);

export const Banner: React.FC<{ title: string; desc: string; icon?: boolean }> = ({ title, desc, icon }) => (
  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between bg-white shadow-sm mb-3 cursor-pointer hover:bg-gray-50">
    <div className="flex items-center gap-3">
      {icon && <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-gray-500 font-bold border border-gray-100">IMG</div>}
      <div className="flex flex-col">
        <span className="font-bold text-sm text-gray-900 mb-1">{title}</span>
        <span className="text-xs text-gray-500">{desc}</span>
      </div>
    </div>
    <ChevronRight size={18} className="text-gray-400" />
  </div>
);

export const Pagination: React.FC<{ current: number; total: number; type?: 'dots' | 'number' }> = ({ current, total, type = 'number' }) => {
  if (type === 'dots') {
    return (
      <div className="flex justify-center gap-1.5 my-4">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${i + 1 === current ? 'w-5 bg-[#ff6600]' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-4 my-4 text-sm font-medium">
      <ChevronLeft size={20} className="text-gray-400 cursor-pointer" />
      <span>{current} <span className="text-gray-300 mx-1">/</span> <span className="text-gray-500">{total}</span></span>
      <ChevronRight size={20} className="text-gray-800 cursor-pointer" />
    </div>
  );
};

export const Card: React.FC<{ title: string; badge?: string; children: React.ReactNode; selected?: boolean }> = ({ title, badge, children, selected }) => (
  <div className={`border rounded-xl p-4 bg-white mb-3 shadow-sm relative w-full ${selected ? 'border-[#ff6600] ring-1 ring-[#ff6600]' : 'border-gray-200'}`}>
    <div className="flex justify-between items-start mb-2">
      {badge && <span className="bg-[#fff5eb] text-[#ff6600] text-[10px] px-1.5 py-0.5 rounded font-bold">{badge}</span>}
      {selected !== undefined && (
        <div className={`w-5 h-5 rounded-full border ${selected ? 'bg-[#ff6600] border-[#ff6600]' : 'border-gray-300'}`}></div>
      )}
    </div>
    <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
    <div className="text-sm text-gray-600">{children}</div>
  </div>
);

export const DataCard: React.FC<{
    badge: string;
    title: string;
    description?: string;
    rows: { label: string; value: string }[];
    footerText?: string;
    onClick?: () => void;
}> = ({ badge, title, description, rows, footerText, onClick }) => {
    return (
        <div 
            className={`border border-gray-200 rounded-lg bg-white mb-3 shadow-sm overflow-hidden ${onClick ? 'cursor-pointer hover:border-gray-300' : ''}`}
            onClick={onClick}
        >
            <div className="p-4 border-b border-gray-100 flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="inline-block bg-[#e8f5e9] text-[#2e7d32] text-[10px] px-1.5 py-0.5 rounded font-bold self-start mb-1">{badge}</span>
                    <h3 className="font-bold text-sm text-gray-900">{title}</h3>
                    {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
                </div>
                {onClick && <ChevronRight size={18} className="text-gray-400 mt-1"/>}
            </div>
            <div className="p-4 bg-gray-50 space-y-1.5">
                {rows.map((row, i) => (
                    <div key={i} className="flex justify-between text-xs">
                        <span className="text-gray-500">{row.label}</span>
                        <span className="text-gray-900 font-medium">{row.value}</span>
                    </div>
                ))}
                {footerText && <div className="pt-2 mt-2 border-t border-gray-200 text-[11px] text-gray-400">{footerText}</div>}
            </div>
        </div>
    );
};

export const PaymentCard: React.FC<{
  title: string;
  logo?: string;
  benefits: string[];
  recommended?: boolean;
}> = ({ title, logo, benefits, recommended }) => (
  <div className={`border rounded-lg p-4 bg-white mb-3 shadow-sm ${recommended ? 'border-[#ff6600]' : 'border-gray-200'}`}>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-500 overflow-hidden">
            {logo ? <img src={logo} alt={title} className="w-full h-full object-cover" /> : 'LOGO'}
        </div>
        <div className="font-bold text-sm text-gray-900">{title}</div>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </div>
    <div className="bg-gray-50 rounded p-3">
        <ul className="list-disc pl-4 space-y-1">
            {benefits.map((benefit, i) => (
                <li key={i} className="text-[11px] text-gray-600">{benefit}</li>
            ))}
        </ul>
    </div>
  </div>
);

export const ThumbnailListItem: React.FC<{
  image?: string;
  badge?: string;
  title: string;
  description: string;
  date?: string;
}> = ({ image, badge, title, description, date }) => (
  <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
    <div className="relative shrink-0">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
            {image ? <img src={image} alt="thumb" className="w-full h-full object-cover" /> : <ImageIcon size={24}/>}
        </div>
        {badge && (
            <span className="absolute -top-1 -left-1 bg-white border border-gray-300 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                {badge}
            </span>
        )}
    </div>
    <div className="flex-1">
        <div className="text-xs text-[#ff6600] font-bold mb-1">{description}</div>
        <div className="text-sm font-bold text-gray-900 leading-tight mb-1">{title}</div>
        {date && <div className="text-[11px] text-gray-400">{date}</div>}
    </div>
  </div>
);

export const InfoCard: React.FC<{ 
    type?: 'basic' | 'link' | 'detail';
    title: string;
    badge?: string;
    subTitle?: string;
    step?: string;
    rows: { label: string; value: string }[];
    onClick?: () => void;
}> = ({ type = 'basic', title, badge, subTitle, step, rows, onClick }) => {
    return (
        <div 
            className={`border border-gray-200 rounded-lg p-5 bg-white mb-3 shadow-sm w-full ${onClick ? 'cursor-pointer hover:border-gray-300' : ''}`}
            onClick={onClick}
        >
            <div className="flex items-start justify-between mb-4 pb-2 border-b border-gray-50 border-dashed">
                <div className="flex items-center gap-2">
                    {badge && <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-[11px] font-bold">{badge}</span>}
                    <span className="font-bold text-[15px] text-gray-900">{title}</span>
                    {subTitle && <span className="font-bold text-[15px] text-gray-900">{subTitle}</span>}
                </div>
                {type === 'link' && <ChevronRight size={20} className="text-gray-400" />}
                {step && <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">{step}</div>}
            </div>
            <div className="flex flex-col gap-1.5">
                {rows.map((row, i) => (
                    <div key={i} className="flex justify-between items-start text-[13px]">
                        <span className="text-gray-500 w-24">{row.label}</span>
                        <span className="text-gray-900 flex-1 text-right font-medium">{row.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const InfoBox: React.FC<{
    rows: { label: string; value: string }[];
}> = ({ rows }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm w-full max-w-sm">
            <div className="flex flex-col gap-1.5">
                {rows.map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-[13px]">
                        <span className="text-gray-900 font-medium">{row.label}</span>
                        <span className="text-gray-900 text-right">{row.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const ProductSummaryCard: React.FC = () => (
  <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm w-full max-w-sm">
     <div className="flex gap-2 mb-3">
        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold">고급</span>
        <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-bold">127개 보장</span>
     </div>
     <h3 className="font-bold text-lg mb-4 text-gray-900">큰 병 걸렸을 때 걱정이 없게</h3>
     
     <div className="space-y-4 mb-5">
        <div className="flex justify-between items-start">
            <span className="bg-[#ff6600] text-white text-[10px] px-2 py-0.5 rounded-full mt-1">출생 전</span>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-gray-900">75,159</span>
                    <span className="text-sm text-gray-500">원</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5 text-right">
                    <span>어린이 55,159원</span>
                    <span className="mx-1">+</span>
                    <span>실손 20,000원</span>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-start">
            <span className="bg-gray-400 text-white text-[10px] px-2 py-0.5 rounded-full mt-1">출생 후</span>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-gray-900">55,976</span>
                    <span className="text-sm text-gray-500">원</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5 text-right">
                    <span>어린이 55,976원</span>
                    <span className="mx-1">+</span>
                    <span className="text-gray-300">실손 미가입</span>
                </div>
            </div>
        </div>
     </div>
     <div className="border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500 text-center">오프라인 대비 <span className="text-[#ff6600]">X%</span> 저렴한 다이렉트 보험료</p>
     </div>
  </div>
)

export const BillCard: React.FC<{
    title: string;
    rows: { label: string; value: string }[];
    finalPrice: string;
    originalPrice?: string;
    discountInfo?: string;
}> = ({ title, rows, finalPrice, originalPrice, discountInfo }) => {
    return (
        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm mb-4">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-bold text-sm text-gray-800">{title}</h3>
            </div>
            <div className="p-4">
                <div className="flex flex-col gap-2 mb-4">
                    {rows.map((row, i) => (
                        <div key={i} className="flex justify-between text-xs">
                            <span className="text-gray-500">{row.label}</span>
                            <span className="text-gray-900 font-medium">{row.value}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t border-dashed border-gray-200 pt-3 text-right">
                    {originalPrice && (
                        <div className="text-xs text-gray-400 line-through mb-1">{originalPrice}</div>
                    )}
                    <div className="flex items-end justify-end gap-2">
                        <span className="text-sm font-bold text-gray-700">최종 보험료</span>
                        <span className="text-xl font-bold text-[#ff6600]">{finalPrice}</span>
                    </div>
                    {discountInfo && (
                        <div className="text-[11px] text-[#ff6600] mt-1 bg-[#fff5eb] inline-block px-2 py-0.5 rounded">
                            {discountInfo}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export const Accordion: React.FC<{ title: string; children: React.ReactNode; isOpen?: boolean }> = ({ title, children, isOpen: defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 w-full">
      <button className="w-full flex justify-between items-center py-3 text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-sm font-medium text-gray-800">{title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-md mb-2">{children}</div>}
    </div>
  );
};

export const PlanAccordion: React.FC<{
    planName: string;
    price: string;
    features: string[];
    tag?: string;
    isOpen?: boolean;
}> = ({ planName, price, features, tag, isOpen: defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={`border rounded-lg mb-3 overflow-hidden ${isOpen ? 'border-[#ff6600] ring-1 ring-[#ff6600] bg-white' : 'border-gray-200 bg-gray-50'}`}>
            <button className="w-full flex items-center p-4 text-left bg-white" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {tag && <span className="bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{tag}</span>}
                        <span className="font-bold text-sm text-gray-900">{planName}</span>
                    </div>
                    <div className="text-lg font-bold text-[#ff6600]">{price}</div>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'bg-[#ff6600] border-[#ff6600] text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                    <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-100 bg-[#fffcf9]">
                    <ul className="space-y-1">
                        {features.map((feature, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                                <Check size={12} className="text-[#ff6600]" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export const PhotoRegistration: React.FC<{
    title: string;
    status: 'closed' | 'open-empty' | 'open-filled';
    description?: string;
    imageSrc?: string;
    isReplacement?: boolean; // For vehicle replacement case
}> = ({ title, status, description, imageSrc, isReplacement }) => {
    const [isOpen, setIsOpen] = useState(status !== 'closed');
    const [tab, setTab] = useState<'direct' | 'link'>('direct');
    const [mode, setMode] = useState<'empty' | 'filled'>(status === 'open-filled' ? 'filled' : 'empty');

    const renderContent = () => (
        <div className="p-4 bg-white border-t border-gray-200">
             {/* Tab Menu */}
             <div className="flex mb-4 border border-gray-300 rounded overflow-hidden">
                <button 
                    onClick={() => setTab('direct')}
                    className={`flex-1 py-2 text-xs font-bold ${tab === 'direct' ? 'bg-[#222] text-white' : 'bg-white text-gray-500'}`}
                >
                    직접 사진 등록
                </button>
                <button 
                    onClick={() => setTab('link')}
                    className={`flex-1 py-2 text-xs font-bold border-l border-gray-300 ${tab === 'link' ? 'bg-[#222] text-white' : 'bg-white text-gray-500'}`}
                >
                    문자로 링크 받기
                </button>
             </div>

             {/* Content */}
             {tab === 'direct' ? (
                 <div className="flex flex-col gap-4">
                     {description && <p className="text-xs text-gray-600">{description}</p>}
                     
                     <div className="border border-dashed border-gray-300 rounded-lg bg-gray-50 h-32 flex flex-col items-center justify-center relative overflow-hidden">
                        {mode === 'filled' && imageSrc ? (
                             <>
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                     <ImageIcon size={32} className="text-gray-400 mb-1"/>
                                </div>
                                <span className="absolute bottom-10 text-[10px] text-gray-500">등록한 이미지</span>
                             </>
                        ) : (
                             <span className="text-gray-400 text-xs">샘플 이미지</span>
                        )}
                        
                        {/* Buttons Overlay */}
                        <div className="absolute bottom-3 flex gap-2 w-[90%] justify-center">
                            {mode === 'empty' ? (
                                <>
                                    <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 등록</button>
                                    <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 촬영</button>
                                </>
                            ) : (
                                <>
                                    <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">사진 변경</button>
                                    <button className="flex-1 bg-white border border-gray-300 rounded py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">재촬영</button>
                                </>
                            )}
                        </div>
                     </div>
                     
                     {/* Optional: Checkbox for exemption */}
                     <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full border border-gray-300 bg-white"></div>
                        <span className="text-xs text-gray-600">할인특약 제외</span>
                     </label>
                 </div>
             ) : (
                 <div className="text-center py-4">
                     <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                         <Smartphone size={24} className="text-gray-400"/>
                     </div>
                     <p className="text-xs text-gray-600">휴대폰으로 촬영 링크를 발송합니다.</p>
                     <Button size="sm" variant="outline" className="mt-2 w-full">링크 발송하기</Button>
                 </div>
             )}
        </div>
    );

    return (
        <div className={`border rounded-lg mb-3 overflow-hidden bg-white ${isOpen ? 'border-[#222]' : 'border-gray-200'}`}>
            <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center gap-2">
                     <span className="text-sm font-bold text-gray-900">{title}</span>
                     {mode === 'filled' ? (
                         <span className="bg-[#fff5eb] text-[#ff6600] text-[10px] px-1.5 py-0.5 rounded font-bold">등록완료</span>
                     ) : (
                        isOpen && <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded font-bold">작성중</span>
                     )}
                </div>
                <div className="flex items-center gap-2">
                    {mode === 'filled' && !isOpen && (
                         <div className="w-8 h-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                             <ImageIcon size={14} className="text-gray-400"/>
                         </div>
                    )}
                    <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </div>
            
            {isOpen && renderContent()}
        </div>
    )
}

export const PhotoAccordion: React.FC<{ title: string; registered?: boolean; children?: React.ReactNode }> = ({ title, registered, children }) => {
    // Legacy simple version kept for backward compatibility if needed, but PhotoRegistration is preferred
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden bg-white">
            <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-col">
                    {registered ? 
                        <span className="text-[#ff6600] text-xs font-bold mb-1">등록완료</span> : 
                        <span className="text-gray-400 text-xs font-medium mb-1">등록필요</span>
                    }
                    <span className="text-sm font-bold text-gray-900">{title}</span>
                </div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
                    <div className="w-full aspect-video bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400 text-xs">
                        샘플 이미지
                    </div>
                    <div className="flex gap-2 w-full">
                        <button className="flex-1 py-2 border border-gray-300 rounded bg-white text-xs text-gray-700">사진 등록</button>
                        <button className="flex-1 py-2 border border-gray-300 rounded bg-white text-xs text-gray-700">사진 촬영</button>
                    </div>
                    {children}
                </div>
            )}
        </div>
    )
}

export const Notice: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
            <button
                className="w-full flex justify-between items-center p-4 bg-white text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-bold text-gray-900">{title}</div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                    {children}
                </div>
            )}
        </div>
    );
}

export const Disclosure: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border border-gray-200 rounded-md mb-2 overflow-hidden">
        <button 
            className="w-full flex items-start gap-2 p-3 text-left bg-white hover:bg-gray-50" 
            onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform mt-0.5 ${isOpen ? 'rotate-90' : ''}`} />
          <span className="text-sm text-gray-800 font-medium leading-tight">{title}</span>
        </button>
        {isOpen && <div className="p-3 pt-0 pl-10 text-sm text-gray-600 bg-white">{children}</div>}
      </div>
    );
  };

export const Stepper: React.FC<{ current: number; total: number }> = ({ current, total }) => (
  <div className="flex items-center gap-1 mb-6">
    <span className="text-[#ff6600] font-bold text-sm">{current}</span>
    <span className="text-gray-300 text-sm">/</span>
    <span className="text-gray-400 text-sm">{total}</span>
  </div>
);

export const Badge: React.FC<{ text: string; variant?: 'orange' | 'green' | 'blue' | 'gray' | 'red' }> = ({ text, variant = 'orange' }) => {
  const colors = {
    orange: "bg-[#fff5eb] text-[#ff6600]",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    gray: "bg-gray-100 text-gray-600",
    red: "bg-red-100 text-red-600",
  };
  return (
    <span className={`${colors[variant]} px-2 py-0.5 rounded text-[10px] font-bold mr-1`}>{text}</span>
  );
};

export const ContactBanner: React.FC<{ title: string; phone: string; time: string }> = ({ title, phone, time }) => {
    return (
        <div className="bg-[#f5f5f5] rounded-lg p-4 flex flex-col gap-1 mb-3">
            <span className="text-xs font-bold text-gray-500">{title}</span>
            <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gray-900">{phone}</span>
                <span className="border border-gray-300 rounded px-2 py-0.5 bg-white text-[11px] text-gray-600">{time}</span>
            </div>
        </div>
    )
}

export const Tooltip: React.FC<{ content: string }> = ({ content }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => setShow(!show)}>
        <span className="font-bold text-sm">도움말</span>
        <HelpCircle size={16} className="text-gray-400" />
      </div>
      {show && (
        <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-[#222] text-white text-xs rounded shadow-lg z-20">
            <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-[#ff6600]">안내</span>
                <X size={14} className="cursor-pointer hover:text-gray-300" onClick={(e) => { e.stopPropagation(); setShow(false); }}/>
            </div>
            {content}
        </div>
      )}
    </div>
  );
};

// --- Process & State Components ---

export const ProcessTimeline: React.FC<{ startLabel: string; endLabel: string }> = ({ startLabel, endLabel }) => {
    return (
        <div className="flex items-center justify-between w-full max-w-sm mx-auto my-6 relative">
            {/* Background Line */}
            <div className="absolute left-4 right-4 top-[9px] h-[2px] bg-gray-200 -z-10"></div>
            
            {/* Start Node */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-gray-200 border-[3px] border-white shadow-sm"></div>
                <span className="text-xs text-gray-500 font-medium">{startLabel}</span>
            </div>

            {/* Plane Icon */}
            <div className="bg-white px-2 text-gray-400">
                <Plane size={24} className="rotate-90 text-gray-300 fill-gray-100" />
            </div>

            {/* End Node */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-[20px] h-[20px] rounded-full bg-[#ff6600] border-[3px] border-white shadow-sm"></div>
                <span className="text-xs text-[#ff6600] font-bold">{endLabel}</span>
            </div>
        </div>
    );
};

export const EmptyState: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-white mb-3 font-bold text-xl">!</div>
            <p className="text-sm text-gray-500">{text}</p>
        </div>
    );
};

export const LoadingSpinner: React.FC<{ text?: string }> = ({ text }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-white">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-[#ff6600] rounded-full animate-spin mb-4"></div>
            {text && <p className="text-sm text-gray-600 font-medium text-center">{text}</p>}
        </div>
    );
}

// --- Feedback Components ---

export const ModalPreview: React.FC = () => (
    <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="bg-white w-64 rounded-lg shadow-lg z-10 overflow-hidden relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"><X size={18}/></button>
            <div className="p-5 text-center">
                <h4 className="font-bold text-gray-900 mb-2">작성을 중단하시겠습니까?</h4>
                <p className="text-xs text-gray-500 mb-0">입력하신 내용은 저장되지 않습니다.</p>
            </div>
            <div className="flex border-t border-gray-100">
                <button className="flex-1 py-3 text-sm text-gray-500 hover:bg-gray-50">취소</button>
                <button className="flex-1 py-3 text-sm text-[#ff6600] font-bold border-l border-gray-100 hover:bg-orange-50">확인</button>
            </div>
        </div>
    </div>
);

export const BottomSheetPreview: React.FC = () => (
    <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-end justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="bg-white w-full rounded-t-xl shadow-lg z-10 animate-slide-up">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h4 className="font-bold text-gray-900">보험기간 선택</h4>
                <button className="text-gray-400 hover:text-gray-600"><X size={20}/></button>
            </div>
            <div className="p-4 max-h-40 overflow-y-auto">
                <div className="py-3 border-b border-gray-50 flex justify-between cursor-pointer">
                    <span className="text-sm font-bold text-[#ff6600]">1년 (기본)</span>
                    <Check size={16} className="text-[#ff6600]"/>
                </div>
                <div className="py-3 border-b border-gray-50 text-sm text-gray-600 cursor-pointer">3년</div>
                <div className="py-3 text-sm text-gray-600 cursor-pointer">5년</div>
            </div>
        </div>
    </div>
);

// --- New Components for Addition ---

export const IconActionList: React.FC = () => (
    <div className="grid grid-cols-2 gap-3">
        {['간편비밀번호', '생체인증', '휴대폰인증', '카카오인증', '네이버인증', '금융인증'].map((item, i) => (
            <button key={i} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left bg-white">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">Img</div>
                <span className="font-bold text-sm text-gray-800">{item}</span>
                <ChevronRight size={18} className="ml-auto text-gray-300" />
            </button>
        ))}
    </div>
);

export const AccountButton: React.FC<{ bankName: string; accountNumber: string }> = ({ bankName, accountNumber }) => (
    <button className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:border-[#333] transition-colors group">
        <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500">{bankName}</span>
            <span className="text-sm font-bold text-gray-900">{accountNumber}</span>
        </div>
        <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600" />
    </button>
);

export const AddressInputGroup: React.FC = () => (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2">
            <div className="w-24 h-10 border border-gray-300 rounded px-3 flex items-center bg-gray-50 text-gray-600 text-sm">04535</div>
            <button className="px-4 h-10 bg-[#333] text-white text-sm font-bold rounded hover:bg-black transition-colors">주소검색</button>
        </div>
        <div className="h-10 border border-gray-300 rounded px-3 flex items-center bg-white text-gray-900 text-sm">
            서울 중구 명동로2길 20, 현대해상명동사옥
        </div>
        <div className="h-10 border border-gray-300 rounded px-3 flex items-center bg-white">
             <input type="text" placeholder="상세주소 입력" className="w-full h-full outline-none text-sm" />
        </div>
    </div>
);

export const ImageBottomSheetPreview: React.FC = () => (
    <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-end justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="bg-white w-full rounded-t-xl shadow-lg z-10 animate-slide-up overflow-hidden">
             <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">관리자 등록 배너 이미지</span>
                <button className="absolute top-4 right-4 bg-white/80 rounded-full p-1 text-gray-600"><X size={20}/></button>
             </div>
             <div className="p-4">
                 <Button size="full" variant="primary">확인</Button>
             </div>
        </div>
    </div>
);

export const MobileFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const Modal: React.FC = () => <div></div>;
export const BottomSheet: React.FC = () => <div></div>;
