document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('barChart').getContext('2d');

//input with id UserName on change event
    document.getElementById('username').addEventListener('input', function () {
        // Get the value of the input field
        const userName = document.getElementById('username').value;
        //regex to check if the user name has one uppercase letter, one digit and one special character and has a length of 8 characters
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        // Check if the user name matches the regex
        if (regex.test(userName)) {
            // set the input field border color to green
            document.getElementById('username').style.borderColor = 'green';
        } else {
            // set the input field border color to red
            document.getElementById('username').style.borderColor = 'red';
        }
    });



    function updateChart() {
        // Retrieve income and expense data
        var janIncome = parseFloat(document.getElementById('income-jan').value) || 0;
        var febIncome = parseFloat(document.getElementById('income-feb').value) || 0;
        var marIncome = parseFloat(document.getElementById('income-mar').value) || 0;
        var aprIncome = parseFloat(document.getElementById('income-apr').value) || 0;
        var mayIncome = parseFloat(document.getElementById('income-may').value) || 0;
        var junIncome = parseFloat(document.getElementById('income-jun').value) || 0;
        var julIncome = parseFloat(document.getElementById('income-jul').value) || 0;
        var augIncome = parseFloat(document.getElementById('income-aug').value) || 0;
        var sepIncome = parseFloat(document.getElementById('income-sep').value) || 0;
        var octIncome = parseFloat(document.getElementById('income-oct').value) || 0;
        var novIncome = parseFloat(document.getElementById('income-nov').value) || 0;
        var decIncome = parseFloat(document.getElementById('income-dec').value) || 0;

        var janExpense = parseFloat(document.getElementById('expenses-jan').value) || 0;
        var febExpense = parseFloat(document.getElementById('expenses-feb').value) || 0;
        var marExpense = parseFloat(document.getElementById('expenses-mar').value) || 0;
        var aprExpense = parseFloat(document.getElementById('expenses-apr').value) || 0;
        var mayExpense = parseFloat(document.getElementById('expenses-may').value) || 0;
        var junExpense = parseFloat(document.getElementById('expenses-jun').value) || 0;
        var julExpense = parseFloat(document.getElementById('expenses-jul').value) || 0;
        var augExpense = parseFloat(document.getElementById('expenses-aug').value) || 0;
        var sepExpense = parseFloat(document.getElementById('expenses-sep').value) || 0;
        var octExpense = parseFloat(document.getElementById('expenses-oct').value) || 0;
        var novExpense = parseFloat(document.getElementById('expenses-nov').value) || 0;
        var decExpense = parseFloat(document.getElementById('expenses-dec').value) || 0;

        var incomeData = [
            janIncome, febIncome, marIncome, aprIncome, mayIncome, junIncome,
            julIncome, augIncome, sepIncome, octIncome, novIncome, decIncome
        ];

        var expenseData = [
            janExpense, febExpense, marExpense, aprExpense, mayExpense, junExpense,
            julExpense, augExpense, sepExpense, octExpense, novExpense, decExpense
        ];

        // Update the chart
        barChart.data.datasets[0].data = incomeData;
        barChart.data.datasets[1].data = expenseData;
        barChart.update();
    }

    // Initialize the chart
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [], // Empty initially
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: [], // Empty initially
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Income vs Expenses'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add event listener to the "Chart" tab
    document.getElementById('chart-tab').addEventListener('click', updateChart);

    document.getElementById('downloadBtn').addEventListener('click', function () {
        // Get the chart canvas element
        const canvas = document.getElementById('barChart');
        
        // Convert the canvas to a data URL (image format)
        const imageURL = canvas.toDataURL('image/png');
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'barChart.png'; // Set the default file name
        
        // Trigger the download
        link.click();
    });
});