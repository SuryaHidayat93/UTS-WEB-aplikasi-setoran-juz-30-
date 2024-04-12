import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DropdownDate = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='w-80 h-12 rounded-lg border border-abumuda bg-white text-medium flex items-center font-inter font-medium mt-4'>
            <DatePicker
                className='w-72 h-full ml-3'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Tanggal"
            />
        </div>
    );
};

export default DropdownDate;
