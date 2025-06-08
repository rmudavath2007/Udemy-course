document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('barChart').getContext('2d');

    // Input with id UserName on change event
    const usernameInput = document.getElementById('username');
    usernameInput.addEventListener('input', () => {
        const userName = usernameInput.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        usernameInput.style.borderColor = regex.test(userName) ? 'green' : 'red';
    });

    const updateChart = () => {
        const getValue = (id) => parseFloat(document.getElementById(id).value) || 0;

        const incomeData = [
            getValue('income-jan'), getValue('income-feb'), getValue('income-mar'),
            getValue('income-apr'), getValue('income-may'), getValue('income-jun'),
            getValue('income-jul'), getValue('income-aug'), getValue('income-sep'),
            getValue('income-oct'), getValue('income-nov'), getValue('income-dec')
        ];

        const expenseData = [
            getValue('expenses-jan'), getValue('expenses-feb'), getValue('expenses-mar'),
            getValue('expenses-apr'), getValue('expenses-may'), getValue('expenses-jun'),
            getValue('expenses-jul'), getValue('expenses-aug'), getValue('expenses-sep'),
            getValue('expenses-oct'), getValue('expenses-nov'), getValue('expenses-dec')
        ];

        // Update the chart
        barChart.data.datasets[0].data = incomeData;
        barChart.data.datasets[1].data = expenseData;
        barChart.update();
    };

    // Initialize the chart
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            datasets: [
                {
                    label: 'Income',
                    data: [], // Empty initially
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Expenses',
                    data: [], // Empty initially
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
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

    // Add event listener for downloading the chart
    document.getElementById('downloadBtn').addEventListener('click', () => {
        const canvas = document.getElementById('barChart');
        const imageURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'barChart.png';
        link.click();
    });
});