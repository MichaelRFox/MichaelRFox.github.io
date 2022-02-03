var conversionColor;

function init () {
    conversionColor = new fxColor.Color;
    conversionColor.RGB([255,255,0]);
    fillTable();
    opacity.value = 1;
}

// var XYZx = document.getElementById('XYZx');
// var XYZy = document.getElementById('XYZy');
// var XYZz = document.getElementById('XYZz');
// var LABl = document.getElementById('LABl');
// var LABa = document.getElementById('LABa');
// var LABb = document.getElementById('LABb');
// var LCHabL = document.getElementById('LCHabL');
// var LCHabC = document.getElementById('LCHabC');
// var LCHabH = document.getElementById('LCHabH');
// var LUVl = document.getElementById('LUVl');
// var LUVu = document.getElementById('LUVu');
// var LUVv = document.getElementById('LUVv');
// var LCHuvL = document.getElementById('LCHuvL');
// var LCHuvC = document.getElementById('LCHuvC');
// var LCHuvH = document.getElementById('LCHuvH');
// var HSVh = document.getElementById('HSVh');
// var HSVs = document.getElementById('HSVs');
// var HSVv = document.getElementById('HSVv');
// var HLS = document.getElementById('HLS');
// var HLS = document.getElementById('HLS');
// var HLS = document.getElementById('HLS');
// var RGBr = document.getElementById('RGBr');
// var RGBg = document.getElementById('RGBg');
// var RGBb = document.getElementById('RGBb');
// var RGBhex = document.getElementById('RGBhex');
// var RGBcss = document.getElementById('RGBcss');
// var RGBint = document.getElementById('RGBint');
// var w3cColor = document.getElementById('w3cColor');
// var CMYKc = document.getElementById('CMYKc');
// var CMYKm = document.getElementById('CMYKm');
// var CMYKy = document.getElementById('CMYKy');
// var CMYKk = document.getElementById('CMYKk');
// var fillColor = document.getElementById('fillColor');
// var colorSpace = document.getElementById('colorSpace');
// var observer = document.getElementById('observer');
// var contrastText = document.getElementById('contrastText');
// var lighter = document.getElementById('lighter');
// var darker = document.getElementById('darker');
// var saturate = document.getElementById('saturate');
// var deSaturate = document.getElementById('deSaturate');
// var opacity = document.getElementById('opacity');


// function parseInputOLD (input) {
//     var val = parseFloat(input);
//     return(isNaN(val) ? 0.0 : val);
// }

function parseInput (elementId) {
    var element = document.getElementById(elementId);
    var ret = [];
    [...element.cells].forEach(cell => {
        if (cell.children[0].type == 'text') {
            ret.push(+cell.children[0].value);
        };
    });
    return ret;
}

// function parseOutputOLD (output, elements) {
//     var numbers = output.match(/-?\d+\.*\d*/g);
//     numbers = numbers.map(d => parseFloat((+d).toFixed(5)));
//     elements.forEach((element, index) => {
//         element.value = numbers[index];
//     });
// }

function parseOutput (output, elementId) {
    var element = document.getElementById(elementId);
    var numbers = output.match(/-?\d+\.*\d*/g);
    numbers = numbers.map(d => parseFloat((+d).toFixed(5)));
    var index = 0;
    [...element.cells].forEach(cell => {
        if (cell.children[0].type == 'text') {
            cell.children[0].value = numbers[index];
            index++;
        };
    });
}

function fillTable () {

    let xyz = conversionColor.XYZ();
    parseOutput(`${xyz.x}, ${xyz.y}, ${xyz.z}`, 'xyz');

    parseOutput(conversionColor.LAB(), 'lab');
    parseOutput(conversionColor.LCHab(), 'lchab');
    parseOutput(conversionColor.LUV(), 'luv');
    parseOutput(conversionColor.LCHuv(), 'lchuv');
    parseOutput(conversionColor.HSV(), 'hsv');
    parseOutput(conversionColor.HSL(), 'hsl');
    parseOutput(conversionColor.HWB(), 'hwb');
    parseOutput(conversionColor.RGB(), 'rgb');

    document.getElementById('RGBhex').value = conversionColor.HEX();
    document.getElementById('RGBcss').value = conversionColor.RGB();
    document.getElementById('RGBint').value = conversionColor.RGBint();
    document.getElementById('w3cColor').value = conversionColor.w3cColor();;

    parseOutput(conversionColor.CMYK(), 'cmyk');

    var fillColor = document.getElementById('fillColor');
    fillColor.style.backgroundColor = conversionColor.RGB();
    fillColor.style.color = conversionColor.contrastText();
};

function exec(format) {
    switch (format) {
        case 'XYZ':
            // conversionColor.XYZ([parseInput(XYZx.value), parseInput(XYZy.value), parseInput(XYZz.value)]);
            conversionColor.XYZ(parseInput('xyz'));
            break;
        case 'LAB':
            // conversionColor.LAB([parseInput(LABl.value), parseInput(LABa.value), parseInput(LABb.value)]);
            conversionColor.LAB(parseInput('lab'));
            break;
        case 'LCHab':
            // conversionColor.LCHab([parseInput(LCHabL.value), parseInput(LCHabL.value), parseInput(LCHabL.value)]);
            conversionColor.LCHab(parseInput('lchab'));
            break;
        case 'LUV':
            // conversionColor.LUV([parseInput(LUVl.value), parseInput(LUVu.value), parseInput(LUVv.value)]);
            conversionColor.LUV(parseInput('luv'));
            break;
        case 'LCHuv':
            // conversionColor.LCHuv([parseInput(LCHuvL.value), parseInput(LCHuvC.value), parseInput(LCHuvH.value)]);
            conversionColor.LCHuv(parseInput('lchuv'));
            break;
        case 'HSV':
            // conversionColor.HSV([parseInput(HSVh.value), parseInput(HSVs.value), parseInput(HSVv.value)]);
            conversionColor.HSV(parseInput('hsv'));
           break;
        case 'HSL':
            // conversionColor.HSL([parseInput(HLSh.value), parseInput(HLSl.value), parseInput(HLSs.value)]);
            conversionColor.HSL(parseInput('hsl'));
            break;
        case 'HWB':
            conversionColor.HWB(parseInput('hwb'));
            break;
        case 'RGB':
            // conversionColor.RGB([parseInput(RGBr.value), parseInput(RGBg.value), parseInput(RGBb.value)]);
            conversionColor.RGB(parseInput('rgb'));
            break;
        case 'RGBhex':
            conversionColor.HEX(document.getElementById('hex').cells[1].firstChild.value);
            // conversionColor.HEX(RGBhex.value);
            break;
        case 'RGBcss':
            conversionColor.CSScolor(document.getElementById('css').cells[1].firstChild.value);
            break;
        case 'RGBint':
            conversionColor.RGBint(+(document.getElementById('int').cells[1].firstChild.value));
            break;
        case 'W3C Color':
            conversionColor.w3cColor(w3cColor.value);
            break;
        case 'CMYK':
            // conversionColor.CMYK(parseInput(CMYKc.value), parseInput(CMYKm.value), parseInput(CMYKy.value), parseInput(CMYKk.value));
            conversionColor.CMYK(parseInput('cmyk'));
            break;
        case 'observer':
            conversionColor.observer(parseInput(observer.options[observer.selectedIndex].value));
            break;
        case 'colorSpace':
            conversionColor.colorSpace(colorSpace.options[colorSpace.selectedIndex].value);
            break;
        case 'saturate':
            conversionColor.saturate(0.05);
            break;
        case 'deSaturate':
            conversionColor.desaturate(0.05);
            break;
        case 'lighter':
            conversionColor.lighten(0.05);
            break;
        case 'darker':
            conversionColor.darken(0.05);
            break;
        case 'opacity':
            conversionColor.alpha(+opacity.value);
            break;
        case 'contrastText':
            break
    };
    fillTable();
    //saturation.value=99;
};
