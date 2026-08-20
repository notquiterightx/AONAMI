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

fp.push(`(footprint "XIAO-nRF52840-SMD"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd roundrect (at -8.11 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at -8.11 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at -8.11 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at -8.11 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at -8.11 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at -8.11 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P6})`);
fp.push(`(pad "7" smd roundrect (at -8.11 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P7})`);
fp.push(`(pad "8" smd roundrect (at 8.055 ${flipN(flip, 7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P8})`);
fp.push(`(pad "9" smd roundrect (at 8.055 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P9})`);
fp.push(`(pad "10" smd roundrect (at 8.055 ${flipN(flip, 2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P10})`);
fp.push(`(pad "11" smd roundrect (at 8.055 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P11})`);
fp.push(`(pad "12" smd roundrect (at 8.055 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P12})`);
fp.push(`(pad "13" smd roundrect (at 8.055 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P13})`);
fp.push(`(pad "14" smd roundrect (at 8.055 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.75 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P14})`);
fp.push(`(pad "15" smd roundrect (at -4.5 ${flipN(flip, -0.3135)} ${flipR(flip, p.r + 180)}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P15})`);
fp.push(`(pad "16" smd roundrect (at -4.5 ${flipN(flip, -2.2185)} ${flipR(flip, p.r + 180)}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P16})`);
fp.push(`(pad "17" smd roundrect (at 3.755 ${flipN(flip, 9.2369)} ${flipR(flip, p.r + 270)}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P17})`);
fp.push(`(pad "18" smd roundrect (at 5.66 ${flipN(flip, 9.2369)} ${flipR(flip, p.r + 270)}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask") (roundrect_rratio 0.25) (solder_mask_margin 0.0508) (thermal_bridge_angle 45)  ${p.P18})`);
fp.push(`(pad "19" smd circle (at -1.325 ${flipN(flip, -8.5685)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P19})`);
fp.push(`(pad "20" smd circle (at 1.215 ${flipN(flip, -8.5685)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P20})`);
fp.push(`(pad "21" smd circle (at -1.325 ${flipN(flip, -6.0285)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P21})`);
fp.push(`(pad "22" smd circle (at 1.215 ${flipN(flip, -6.0285)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P22})`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start -8.945 ${flipN(flip, -10.55)}) (end 8.855 ${flipN(flip, 10.4)}) (stroke (width 0.05) (type default)) (fill none) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_rect (start -8.945 ${flipN(flip, -10.55)}) (end 8.855 ${flipN(flip, 10.4)}) (stroke (width 0.1) (type default)) (fill none) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_circle (center -7.861 ${flipN(flip, -9.4)}) (end -7.861 ${flipN(flip, -9.654)}) (stroke (width 0.5) (type solid)) (fill solid) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start -8.945 ${flipN(flip, 8.513)}) (end -8.945 ${flipN(flip, -8.632)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -7.04 ${flipN(flip, 10.418)}) (end 6.93 ${flipN(flip, 10.418)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.55 ${flipN(flip, -10.537)}) (end -4.546272 ${flipN(flip, -11.547272)}) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -4.046272 ${flipN(flip, -12.047)}) (end 3.949 ${flipN(flip, -12.047)}) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 4.449 ${flipN(flip, -11.547)}) (end 4.449 ${flipN(flip, -10.537)}) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 6.93 ${flipN(flip, -10.537)}) (end -7.04 ${flipN(flip, -10.537)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 8.835 ${flipN(flip, 8.513)}) (end 8.835 ${flipN(flip, -8.632)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -8.945 ${flipN(flip, -8.636)}) (mid -8.387038 ${flipN(flip, -9.983038)}) (end -7.04 ${flipN(flip, -10.541)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -7.04 ${flipN(flip, 10.418)}) (mid -8.387038 ${flipN(flip, 9.860038)}) (end -8.945 ${flipN(flip, 8.513)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start -4.546272 ${flipN(flip, -11.547272)}) (mid -4.399724 ${flipN(flip, -11.900644)}) (end -4.046272 ${flipN(flip, -12.047)}) (stroke (width 0.127) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 3.949 ${flipN(flip, -12.047)}) (mid 4.302524 ${flipN(flip, -11.900524)}) (end 4.449 ${flipN(flip, -11.547)}) (stroke (width 0.127) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 6.93 ${flipN(flip, -10.537)}) (mid 8.277024 ${flipN(flip, -9.979024)}) (end 8.835 ${flipN(flip, -8.632)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start 8.835 ${flipN(flip, 8.513)}) (mid 8.277038 ${flipN(flip, 9.860038)}) (end 6.93 ${flipN(flip, 10.418)}) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center -9.155 ${flipN(flip, -10.121)}) (end -9.155 ${flipN(flip, -10.375)}) (stroke (width 0.5) (type solid)) (fill solid) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center -7.881 ${flipN(flip, -9.404)}) (end -7.881 ${flipN(flip, -9.658)}) (stroke (width 0.5) (type solid)) (fill solid) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -9.445 ${flipN(flip, -11.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.78232 0.78232) (thickness 0.10668)) (justify left bottom${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "XIAO-nRF52840-SMD" (at 0.055 ${flipN(flip, 6.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.635 0.635) (thickness 0.1016) (bold yes)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Footprint" "" (at -8.945 ${flipN(flip, 10.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at -8.945 ${flipN(flip, 10.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at -8.945 ${flipN(flip, 10.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

