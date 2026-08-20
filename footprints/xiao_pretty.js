module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P10: { type: 'net', value: undefined },
    P11: { type: 'net', value: undefined },
    P12: { type: 'net', value: undefined },
    P13: { type: 'net', value: undefined },
    P14: { type: 'net', value: undefined },
    P15: { type: 'net', value: undefined },
    P16: { type: 'net', value: undefined },
    P17: { type: 'net', value: undefined },
    P18: { type: 'net', value: undefined },
    P19: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P20: { type: 'net', value: undefined },
    P21: { type: 'net', value: undefined },
    P22: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: undefined },
    P6: { type: 'net', value: undefined },
    P7: { type: 'net', value: undefined },
    P8: { type: 'net', value: undefined },
    P9: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "xiao-ble-tht"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd exclude_from_pos_files)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" thru_hole oval (at -7.62 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P1})`);
fp.push(`(pad "2" thru_hole oval (at -7.62 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P2})`);
fp.push(`(pad "3" thru_hole oval (at -7.62 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P3})`);
fp.push(`(pad "4" thru_hole oval (at -7.62 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P4})`);
fp.push(`(pad "5" thru_hole oval (at -7.62 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P5})`);
fp.push(`(pad "6" thru_hole oval (at -7.62 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P6})`);
fp.push(`(pad "7" thru_hole oval (at -7.62 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P7})`);
fp.push(`(pad "8" thru_hole oval (at 7.62 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P8})`);
fp.push(`(pad "9" thru_hole oval (at 7.62 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P9})`);
fp.push(`(pad "10" thru_hole oval (at 7.62 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P10})`);
fp.push(`(pad "11" thru_hole oval (at 7.62 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P11})`);
fp.push(`(pad "12" thru_hole oval (at 7.62 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P12})`);
fp.push(`(pad "13" thru_hole oval (at 7.62 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P13})`);
fp.push(`(pad "14" thru_hole oval (at 7.62 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 180)}) (size 2.75 1.8) (drill 1 (offset -0.475 0)) (layers "*.Cu" "*.Mask")  ${p.P14})`);
fp.push(`(pad "15" thru_hole circle (at -1.27 ${flipN(flip, -8.572)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P15})`);
fp.push(`(pad "16" thru_hole circle (at 1.27 ${flipN(flip, -8.572)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P16})`);
fp.push(`(pad "17" thru_hole circle (at -1.27 ${flipN(flip, -6.032)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P17})`);
fp.push(`(pad "18" thru_hole circle (at 1.27 ${flipN(flip, -6.032)} ${flipR(flip, p.r + 90)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P18})`);
fp.push(`(pad "19" thru_hole circle (at -4.445 ${flipN(flip, -0.317)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P19})`);
fp.push(`(pad "20" thru_hole circle (at -4.445 ${flipN(flip, -2.222)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P20})`);
fp.push(`(pad "21" thru_hole circle (at 3.81 ${flipN(flip, 9.208)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P21})`);
fp.push(`(pad "22" thru_hole circle (at 5.715 ${flipN(flip, 9.208)} ${flipR(flip, p.r + 180)}) (size 1.397 1.397) (drill 1.016) (layers "*.Cu" "*.Mask")  ${p.P22})`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "U?" (at -19.3989 ${flipN(flip, -11.28268)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 0.889 0.889) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text value "xiao-ble-thruhole" (at -19.8434 ${flipN(flip, -0.29718)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 0.6096 0.6096) (thickness 0.0762)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on Dwgs.User
fp.push(`(fp_rect (start -8.89 ${flipN(flip, 10.5)}) (end 8.89 ${flipN(flip, -10.5)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start 3.350197 ${flipN(flip, -6.785813)}) (end 5.128197 ${flipN(flip, -4.118813)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start -3.507811 ${flipN(flip, -8.182813)}) (end -5.285811 ${flipN(flip, -10.849813)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start 3.350197 ${flipN(flip, -10.849813)}) (end 5.128197 ${flipN(flip, -8.182813)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start -5.285811 ${flipN(flip, -6.785813)}) (end -3.507811 ${flipN(flip, -4.118813)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

