
document.addEventListener("DOMContentLoaded", () => {
    // Redireciona para a seção do formulário quando clicar em "Clique aqui"
    const redirectLink = document.getElementById('redirect');
    const formSection = document.getElementById('form-section');

    redirectLink.addEventListener("click", () => {
        formSection.style.display = "block";  // Exibe a seção de formulário
        window.scrollTo({
            top: formSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Função para esconder o prompt quando o usuário começa a digitar
    const questionInput = document.getElementById('question');

    questionInput.addEventListener("focus", () => {
        if (questionInput.placeholder === "Digite sua pergunta aqui...") {
            questionInput.placeholder = "";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio do formulário para o servidor

        const email = document.getElementById("email").value;
        showPopup(`Obrigado por nos contactar! Em breve enviaremos um e-mail para o endereço de: ${email} com as informações necessárias para responder a sua pergunta.`);
    });

    // Função para mostrar o pop-up
    function showPopup(message) {
        // Cria os elementos do pop-up
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);

        const popup = document.createElement("div");
        popup.className = "popup";

        const popupMessage = document.createElement("p");
        popupMessage.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Fechar";
        closeButton.addEventListener("click", () => {
            popup.remove();
            overlay.remove();
        });

        // Adiciona os elementos ao pop-up
        popup.appendChild(popupMessage);
        popup.appendChild(closeButton);
        document.body.appendChild(popup);

        // Mostra o pop-up e a overlay
        overlay.style.display = "block";
        popup.style.display = "block";
    }
});



// teste

    // Seleciona todas as perguntas
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Adiciona o evento de clique para cada pergunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alterna a classe 'active' no contêiner de FAQ (pergunta + resposta)
            const faqContainer = question.parentElement;
            faqContainer.classList.toggle('active');
        });
    });


// Função para gerar confetes
function createConfetti(x, y) {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff5733', '#33ff57', '#33aaff', '#ff33a1', '#ffb833', '#ff69b4', '#ff0000', '#ffff00']; // Lista de cores

    for (let i = 0; i < 100; i++) { // Gerar 100 confetes
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        const randomX = Math.random() * window.innerWidth; // Posição aleatória na tela
        const randomY = Math.random() * window.innerHeight; // Posição aleatória na tela
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Seleciona uma cor aleatória

        confetti.style.left = `${randomX}px`;
        confetti.style.top = `${randomY}px`;
        confetti.style.backgroundColor = randomColor;

        confettiContainer.appendChild(confetti);

        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 2000); // Confetes serão removidos após 2 segundos (duração da animação)
    }
}

// Adiciona o evento de clique nas imagens de confete
document.getElementById('confetti1').addEventListener('click', (event) => {
    createConfetti(event.clientX, event.clientY); // Chama a função para criar os confetes
});

document.getElementById('confetti2').addEventListener('click', (event) => {
    createConfetti(event.clientX, event.clientY); // Chama a função para criar os confetes
});



//SESSÃO CHARTS

// PIE CHART

(function (H) {
    H.seriesTypes.pie.prototype.animate = function (init) {
        const series = this,
            chart = series.chart,
            points = series.points,
            { animation } = series.options,
            { startAngleRad } = series;

        function fanAnimate(point, startAngleRad) {
            const graphic = point.graphic,
                args = point.shapeArgs;

            if (graphic && args) {
                graphic
                    .attr({
                        start: startAngleRad,
                        end: startAngleRad,
                        opacity: 1
                    })
                    .animate({
                        start: args.start,
                        end: args.end
                    }, {
                        duration: animation.duration / points.length
                    }, function () {
                        if (points[point.index + 1]) {
                            fanAnimate(points[point.index + 1], args.end);
                        }
                        if (point.index === series.points.length - 1) {
                            series.dataLabelsGroup.animate({
                                opacity: 1
                            },
                            void 0,
                            function () {
                                points.forEach(point => {
                                    point.opacity = 1;
                                });
                                series.update({
                                    enableMouseTracking: true
                                }, false);
                                chart.update({
                                    plotOptions: {
                                        pie: {
                                            innerSize: '40%',
                                            borderRadius: 8
                                        }
                                    }
                                });
                            });
                        }
                    });
            }
        }

        if (init) {
            points.forEach(point => {
                point.opacity = 0;
            });
        } else {
            fanAnimate(points[0], startAngleRad);
        }
    };
}(Highcharts));

Highcharts.chart('container1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Departmental Strength of a Company'
    },
    subtitle: {
        text: 'Custom animation of pie series'
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
                format: '<b>{point.name}</b><br>{point.percentage}%',
                distance: 20
            }
        }
    },
    series: [{
        enableMouseTracking: false,
        animation: {
            duration: 2000
        },
        colorByPoint: true,
        data: [{
            name: 'Customer Support',
            y: 21.3
        }, {
            name: 'Development',
            y: 18.7
        }, {
            name: 'Sales',
            y: 20.2
        }, {
            name: 'Marketing',
            y: 14.2
        }, {
            name: 'Other',
            y: 25.6
        }]
    }]
});



// LINE CHART

Highcharts.chart('container2', {
    title: {
        text: 'U.S Solar Employment Growth',
        align: 'left'
    },
    subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: 'left'
    },
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
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
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Installation & Developers',
        data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610, 168960, 171558]
    }, {
        name: 'Manufacturing',
        data: [24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726, 34243, 31050, 33099, 33473]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243, 29213, 25663, 28978, 30618]
    }, {
        name: 'Operations & Maintenance',
        data: [null, null, null, null, null, null, null, null, 11164, 11218, 10077, 12530, 16585]
    }, {
        name: 'Other',
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073, 11471, 11648]
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

Highcharts.chart('container3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
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
        name: 'Year 1990',
        data: [632, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2021',
        data: [1393, 1031, 4695, 745]
    }]
});

// CHART BAR 2 

Highcharts.chart('container4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
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
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});
