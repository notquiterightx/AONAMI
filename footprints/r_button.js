module.exports = {
  params: {
    designator: 'RESET',
    side: 'F',
    MP: { type: 'net', value: "MP" },
    P1: { type: 'net', value: "RST" },
    P2: { type: 'net', value: "GND" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SW_SKHLLCA010"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "alps SKHLLCA010 DIP pushbutton")`);
fp.push(`(tags "alps tht dip pushbutton SPST")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" thru_hole circle (at 2.5 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "${(flip ? "F" : "B")}.Mask")  ${p.P1})`);
fp.push(`(pad "2" thru_hole circle (at -2.5 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "${(flip ? "F" : "B")}.Mask")  ${p.P2})`);
fp.push(`(pad "MP" thru_hole circle (at -3.5 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 2.1 2.1) (drill 1.3) (layers "*.Cu" "*.Mask")  ${p.MP})`);
fp.push(`(pad "MP" thru_hole circle (at 3.5 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 2.1 2.1) (drill 1.3) (layers "*.Cu" "*.Mask")  ${p.MP})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start -3.65 ${flipN(flip, -4.97)}) (end -3.65 ${flipN(flip, 2.18)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.65 ${flipN(flip, -4.97)}) (end 3.65 ${flipN(flip, -4.97)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start -3.65 ${flipN(flip, 2.18)}) (end 3.65 ${flipN(flip, 2.18)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start 3.65 ${flipN(flip, -4.97)}) (end 3.65 ${flipN(flip, 2.18)}) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_text value "SW_SKHLLCA010" (at 0 ${flipN(flip, 1.55)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, -1.45)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -3.9 ${flipN(flip, -3.75)}) (end 3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -3.9 ${flipN(flip, 0.55)}) (end -3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -3.9 ${flipN(flip, 0.55)}) (end 3.9 ${flipN(flip, 0.55)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.25 ${flipN(flip, -5)}) (end 1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start -1.25 ${flipN(flip, -3.75)}) (end -1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 1.25 ${flipN(flip, -3.75)}) (end 1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start 3.9 ${flipN(flip, 0.55)}) (end 3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "REF**" (at -2.25 ${flipN(flip, 3.5)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -3.9 ${flipN(flip, -3.75)}) (end 3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -3.9 ${flipN(flip, -0.07)}) (end -3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -2.25 ${flipN(flip, 0.55)}) (end 2.25 ${flipN(flip, 0.55)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 3.9 ${flipN(flip, -0.07)}) (end 3.9 ${flipN(flip, -3.75)}) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -1.25 ${flipN(flip, -5)}) (end 1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start -1.25 ${flipN(flip, -3.75)}) (end -1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )`);
fp.push(`(fp_line (start 1.25 ${flipN(flip, -3.75)}) (end 1.25 ${flipN(flip, -5)}) (stroke (width 0.12) (type solid)) (layer "Dwgs.User") )`);

// 3D Models
fp.push(`(model "\${KICAD8_3RD_PARTY}/3dmodels/com_github_ebastler_marbastlib/SW_SKHLLC.step" (offset (xyz 0 3.25 2.5)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 180)))`);

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

