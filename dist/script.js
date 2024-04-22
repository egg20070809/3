function convertCurrency() {
            // 獲取美金金額
            var usdAmount = parseFloat(document.getElementById('usdAmount').value);
            
            // 美金匯率，這裡假設 1 美金 = 28 台幣
            var exchangeRate = 28;
            
            // 換算台幣金額
            var twdAmount = usdAmount * exchangeRate;
            
            // 將換算結果顯示在頁面上
            document.getElementById('result').innerHTML = "換算結果：" + twdAmount.toFixed(2) + " 台幣";
        }