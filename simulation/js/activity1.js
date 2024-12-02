let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Interpolation: Hermite Cubic Spline Interpolation</h4>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function calculations() {
    // generate the values of xstart, h1, h2, h3
    for (let i = 0; i < 2; i++) {
        xh[i] = Math.floor(Math.random() * 10) + 1;
    }
    console.log('Random number xh = ', xh);
    // generate the values of x
    x_val[0] = xh[0];
    for (let i = 1; i < 2; i++) {
        x_val[i] = parseInt((x_val[i - 1] + xh[i]).toFixed(2));
    }
    console.log('x_val= ', x_val);
    // generate the values of y
    for (let i = 0; i < 2; i++) {
        y_val[i] = Math.floor(Math.random() * 40) + 40;
    }
    console.log('y_val = ', y_val);
    // generate the values of xstart, h1, h2, h3
    for (let i = 0; i < 2; i++) {
        x_dash[i] = Math.random() * 20 - 10;
        x_dash[i] = Math.floor(x_dash[i] * 100) / 100;
    }
    console.log("Random number x' = ", x_dash);
    for (let i = 0; i < 2; i++) {
        y_dash[i] = Math.random() * 20 - 10;
        y_dash[i] = Math.floor(y_dash[i] * 100) / 100;
    }
    console.log("Random number y' = ", y_dash);
    // values of u
    u = [0, 0.25, 0.5, 0.75, 1];
    fill_table();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <div id="table-div"></div>
        Find x and y at<br>u = 0, 0.25, 0.5, 0.75 &amp; 1
        $$ x(u) = (2u^3 - 3u^2 +1)x_0 + (-2u^3+3u^2)x_1 + (u^3-2u^2+u)x'_0 + (u^3-u^2)x'_1 $$
        $$ y(u) = (2u^3 - 3u^2 +1)y_0 + (-2u^3+3u^2)y_1 + (u^3-2u^2+u)y'_0 + (u^3-u^2)y'_1 $$

        <div id="l-ind-div-act1" style="display:block; margin-top: 3%">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>x(0)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp'>
                    <span id='a21-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>y(0)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp' > <span id='a22-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>x(0.25)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp'> <span id='a23-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>y(0.25)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp'> <span id='a24-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>x(0.5)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a25-inp'> <span id='a25-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>y(0.5)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a26-inp'> <span id='a26-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>x(0.75)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a27-inp'> <span id='a27-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>y(0.75)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a28-inp'> <span id='a28-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>x(1)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a29-inp' > <span id='a29-val-sp'></span>
                </div>

                <div class="col-1"></div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px; text-align: right'>y(1)</p>
                </div>
                <div class="col-1" style="padding:0">
                    <p style='font-size: 16px;'>=</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a30-inp'> <span id='a30-val-sp'></span>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div style='text-align: center; margin-top:3%'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_xu_vals();' >Verify</button></div>
                </div>
            </div>
        </div>
        
        <div id="graph-div" style="display:none; margin-top: 4%">
            <canvas id='plt-x-y'></canvas>
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    calculations();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function fill_table() {
    let div = (document.getElementById('table-div'));
    let header = ['x'];
    tb_data = [['y'], ["x'"], ["y'"]];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i < x_val.length; i++) {
        header.push(`${x_val[i]}`);
        tb_data[0].push(y_val[i]);
        tb_data[1].push(x_dash[i]);
        tb_data[2].push(y_dash[i]);
        n_inputs.push(i + 1);
    }
    let tb = new Display_Table(header, tb_data, div);
    tb.load_table();
    calculate_xu();
    calculate_yu();
    console.log('xu ', xu);
    console.log('yu ', yu);
}
function verify_xu_vals() {
    let btn = (document.getElementById('temp-btn-equation2'));
    let inp1 = (document.getElementById('a21-inp'));
    let sp1 = (document.getElementById('a21-val-sp'));
    let inp2 = (document.getElementById('a22-inp'));
    let sp2 = (document.getElementById('a22-val-sp'));
    let inp3 = (document.getElementById('a23-inp'));
    let sp3 = (document.getElementById('a23-val-sp'));
    let inp4 = (document.getElementById('a24-inp'));
    let sp4 = (document.getElementById('a24-val-sp'));
    let inp5 = (document.getElementById('a25-inp'));
    let sp5 = (document.getElementById('a25-val-sp'));
    let inp6 = (document.getElementById('a26-inp'));
    let sp6 = (document.getElementById('a26-val-sp'));
    let inp7 = (document.getElementById('a27-inp'));
    let sp7 = (document.getElementById('a27-val-sp'));
    let inp8 = (document.getElementById('a28-inp'));
    let sp8 = (document.getElementById('a28-val-sp'));
    let inp9 = (document.getElementById('a29-inp'));
    let sp9 = (document.getElementById('a29-val-sp'));
    let inp10 = (document.getElementById('a30-inp'));
    let sp10 = (document.getElementById('a30-val-sp'));
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(xu[0].toFixed(2)))) {
        alert('x(0) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(yu[0].toFixed(2)))) {
        alert('y(0) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(xu[1].toFixed(2)))) {
        alert('x(0.25) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(yu[1].toFixed(2)))) {
        alert('y(0.25) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(xu[2].toFixed(2)))) {
        alert('x(0.5) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(yu[2].toFixed(2)))) {
        alert('x(0.5) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp7.value).toFixed(2)), parseFloat(xu[3].toFixed(2)))) {
        alert('x(0.75) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp8.value).toFixed(2)), parseFloat(yu[3].toFixed(2)))) {
        alert('y(0.75) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp9.value).toFixed(2)), parseFloat(xu[4].toFixed(2)))) {
        alert('x(1) value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp10.value).toFixed(2)), parseFloat(yu[4].toFixed(2)))) {
        alert('y(1) value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${xu[0].toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${yu[0].toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${xu[1].toFixed(2)}`;
    inp4.remove();
    sp4.innerText = `${yu[1].toFixed(2)}`;
    inp5.remove();
    sp5.innerText = `${xu[2].toFixed(2)}`;
    inp6.remove();
    sp6.innerText = `${yu[2].toFixed(2)}`;
    inp7.remove();
    sp7.innerText = `${xu[3].toFixed(2)}`;
    inp8.remove();
    sp8.innerText = `${yu[3].toFixed(2)}`;
    inp9.remove();
    sp9.innerText = `${xu[4].toFixed(2)}`;
    inp10.remove();
    sp10.innerText = `${yu[4].toFixed(2)}`;
    let graph_div = (document.getElementById('graph-div'));
    graph_div.innerHTML = `<canvas id="plt-x-y"></canvas>`;
    plot_xy();
}
function plot_xy() {
    let btn = (document.getElementById('plot-graph-btn'));
    btn && btn.remove();
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
    // root.id = "act8";
    var ctx = document.getElementById('plt-x-y');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var z = [];
    var z1 = [];
    for (let i = 0; i < x_val.length; i++) {
        z.push({ x: x_val[i], y: y_val[i] });
    }
    for (let i = 0; i < xu.length; i++) {
        z1.push({ x: xu[i], y: yu[i] });
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            //labels: x_val,
            datasets: [
                {
                    label: 'Dataset',
                    data: z,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0,
                    showLine: true,
                },
                {
                    label: 'Hermite Cubic Spline Curve',
                    data: z1,
                    fill: false,
                    borderColor: 'green',
                    tension: 0.5,
                    showLine: true,
                    labels: xu,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'y',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'y vs x',
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
activity1();
//# sourceMappingURL=activity1.js.map