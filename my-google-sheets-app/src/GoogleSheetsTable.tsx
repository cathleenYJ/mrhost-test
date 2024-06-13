import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleSheetsTable = () => {
    // step 1: 創建一個狀態變量來存儲獲取的數據
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://sheets.googleapis.com/v4/spreadsheets/1Vffn4_1kPTekEK_ELXk5yoYKp5QDenFh4Hgcrb3D-fU/values/價格調整中心?key=AIzaSyCFWGERpNa4TnYrfeXwwfOcs4eAgscudBY'
                );
                // step 2: 將獲取的數據存儲在狀態中
                setData(response.data.values);
            } catch (error) {
                console.error('錯誤:', error);
            }
        };

        fetchData();
    }, []);

    // step 3: 遍歷數據以顯示它
    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ marginBottom: '20px', fontSize: '20px' }}>價格調整中心</div>
            <div>
                {data.map((row, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                        {row.map((cell, cellIndex) => (
                            <span key={cellIndex} style={{ width: '80px', marginRight: '10px', fontSize: '10px' }}>
                                {cell}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoogleSheetsTable;