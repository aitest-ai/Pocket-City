// China Television HQ (Nangang): traced from OSM footprint and one Commons photo (see sources.md)
const LANDMARKS = [
  {
    name: 'China Television HQ',
    ids: ['w75507695'],
    build() {
      const b = findBuilding('w75507695'), ring = b.ring, o = b.obb;
      const H = 20;
      const body = block(ring, 0, H, { facade: 'office', wall: ['#6c2e26', '#64291f'], floor: 4, bay: 4.2,
                                       glass: ['#b9c7cc', '#a9bcc3'], trim: '#5a2822', dark: '#4a2a26' });
      const crownBox = { c: o.c, ax: o.ax, L: o.L * 0.55, W: o.W * 0.6 };
      return obj(ring, H + 6, () => {
        const crown = roofOver(crownBox, H, { roof: 'gabled', pitch: 14, roofColour: '#9db4bb', eaves: 0.2 });
        const hx = o.c[0] + o.ax[0] * o.L * 0.1, hy = o.c[1] + o.ax[1] * o.L * 0.1;
        const mast = stick([hx, hy, H + 2], [hx, hy, H + 11], 0.25, '#c9ccd0');
        return planOrder([
          { fp: ring, z1: H, svg: body.draw() },
          { fp: rect(o.c[0], o.c[1], 4, 4), z1: H + 11, svg: crown() + mast }
        ]);
      });
    }
  }
];
