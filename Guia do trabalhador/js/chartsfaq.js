
//SESSÃO CHARTS


// Gráfico de Pizza (Gráfico 1) com Animações de Hover e Ícone de Informações
Highcharts.chart('container1', {
    chart: {
        type: 'pie',
        animation: {
            duration: 2000
        }
    },
    title: {
        text: 'Distribuição de Acidentes de Trabalho por Setores no Brasil (2022)'
    },
    subtitle: {
        text: 'Baseado nos setores com maior número de ocorrências'
    },
    tooltip: {
        headerFormat: '',
        pointFormat:
            '<span style="color:{point.color}">\u25cf</span> ' +
            '{point.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            borderWidth: 2,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f}%',
                distance: 20
            },
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        enableMouseTracking: true,  // Habilita animações de hover
        colorByPoint: true,
        data: [{
            name: 'Saúde e Serviços Sociais',
            y: 95.997
        }, {
            name: 'Comércio e Reparação de Veículos',
            y: 93.216
        }, {
            name: 'Serviços para Empresas',
            y: 59.147
        }, {
            name: 'Produtos Alimentícios e Bebidas',
            y: 46.612
        }, {
            name: 'Construção Civil',
            y: 42.462
        }, {
            name: 'Transporte, Armazenagem e Correios',
            y: 38.938
        }]
    }]
});



// Line Chart (Chart 2)
Highcharts.chart('container2', {
    title: {
        text: 'Benefícios Previdenciários Relacionados a Acidentes de Trabalho',
        align: 'left'
    },
    subtitle: {
        text: 'Fonte: INSS e dados estimados',
        align: 'left'
    },
    yAxis: {
        title: {
            text: 'Quantidade de Benefícios'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2021 to 2024'
        },
        categories: ['2021', '2022', '2023', '2024']
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },
    series: [{
        name: 'Auxílio-doença Acidentário (B91)',
        data: [280000, 290000, 300000, 310000]
    }, {
        name: 'Aposentadoria por Invalidez (B92)',
        data: [38000, 39000, 40000, 42000]
    }, {
        name: 'Pensão por Morte (B93)',
        data: [19500, 19800, 20000, 21500]
    }, {
        name: 'Auxílio-acidente (B94)',
        data: [140000, 145000, 150000, 155000]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});



// Bar Chart (Chart 3)
Highcharts.chart('container3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Distribuição de Acidentes de Trabalho por Região e Tipo'
    },
    subtitle: {
        text: 'Fonte: Ministério da Previdência Social (Boletim Epidemiológico 2017)'
    },
    xAxis: {
        categories: ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Número de Acidentes por 10.000 Trabalhadores',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' por 10.000 trabalhadores'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Acidentes Típicos',
        data: [530, 2150, 1130, 1200, 880]
    }, {
        name: 'Acidentes de Trajeto',
        data: [120, 450, 200, 300, 180]
    }, {
        name: 'Doenças Relacionadas ao Trabalho',
        data: [50, 190, 80, 100, 60]
    }]
});



// Column Chart with Negative Values (Chart 4)
Highcharts.chart('container4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Taxa de Incidência de Acidentes por 100.000 Trabalhadores'
    },
    subtitle: {
        text: 'Fonte: Observatório de Segurança e Saúde no Trabalho - Ministério Público do Trabalho'
    },
    xAxis: {
        categories: ['2021', '2022', '2023', '2024']
    },
    yAxis: {
        title: {
            text: 'Taxa de Incidência (por 100.000 trabalhadores)'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            borderRadius: '25%'
        }
    },
    series: [{
        name: 'Construção Civil',
        data: [620, 590, 610, 600]
    }, {
        name: 'Indústria Naval',
        data: [470, 460, 455, 450]
    }, {
        name: 'Setor Agrícola',
        data: [360, 355, 350, 340]
    }, {
        name: 'Setor de Serviços',
        data: [180, 170, 160, 150]
    }, {
        name: 'Média Nacional',
        data: [300, 280, 290, 270]
    }]
});



document.querySelectorAll('.info-icon').forEach((icon) => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'flex';
    });
});

document.querySelectorAll('.popup .close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.popup').style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});

