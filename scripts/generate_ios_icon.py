"""Night Market Bites iOS icon — 1024x1024, RGB, no alpha (ITMS-90717 safe).

Brand-new design (paper lantern on night-indigo neon bg), deliberately NOT
reusing any Food Master-series element.
"""
import os
from PIL import Image, ImageDraw, ImageFilter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = 1024


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def render():
    # night-indigo radial backdrop
    top, center, edge = (24, 36, 84), (11, 16, 38), (5, 8, 22)
    img = Image.new('RGB', (S, S), edge)
    d = ImageDraw.Draw(img)
    cx, cy, R = S // 2, 400, S * 0.95
    for y in range(0, S, 4):
        for x in range(0, S, 4):
            dist = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / R
            t = max(0.0, 1.0 - dist)
            c = lerp(lerp(edge, center, 0.55), center, t)
            d.rectangle([x, y, x + 4, y + 4], fill=c)

    # hanging string
    d.line([(512, -20), (512, 132)], fill=(255, 77, 109), width=10)

    # lantern body (amber gradient, vertical ribs)
    lx0, ly0, lx1, ly1 = 246, 132, 778, 660
    body = Image.new('RGB', (lx1 - lx0, ly1 - ly0), (255, 194, 75))
    bd = ImageDraw.Draw(body)
    bw, bh = body.size
    for xx in range(0, bw, 8):
        t = xx / bw
        col = lerp((255, 214, 128), (250, 166, 44), abs(t - 0.5) * 2)
        bd.rectangle([xx, 0, xx + 8, bh], fill=col)
    # ribs
    for i in range(1, 7):
        yy = i * bh // 7
        bd.line([(0, yy), (bw, yy)], fill=(214, 130, 30), width=3)
    # soft glow
    glow = Image.new('RGB', img.size, (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([lx0 - 180, ly0 - 150, lx1 + 180, ly1 + 150], fill=(255, 176, 52, 255))
    glow = glow.filter(ImageFilter.GaussianBlur(180))
    img = Image.blend(img, Image.composite(glow, img, Image.new('L', img.size, 110)), 0.55)
    d = ImageDraw.Draw(img)
    # paste body rounded
    mask = Image.new('L', (bw, bh), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle([0, 0, bw, bh], radius=160, fill=255)
    img.paste(body, (lx0, ly0), mask)

    # caps + tassel
    for (cy0, col) in [(96, (255, 77, 109)), (660, (255, 77, 109))]:
        d.rounded_rectangle([296, cy0, 728, cy0 + 52], radius=26, fill=col)
    d.line([(512, 712), (512, 796)], fill=(250, 166, 44), width=12)
    d.rectangle([494, 780, 534, 906], fill=(61, 220, 151))

    # neon sparkle dots
    for (x, y, r, col) in [(150, 220, 10, (61, 220, 151)), (880, 250, 10, (61, 220, 151)),
                           (150, 700, 12, (255, 77, 109)), (880, 690, 12, (255, 77, 109))]:
        d.ellipse([x - r, y - r, x + r, y + r], fill=col)

    return img


def main():
    icon = render().convert('RGB')  # RGB only, no alpha
    os.makedirs(os.path.join(BASE, 'assets', 'images'), exist_ok=True)
    out1 = os.path.join(BASE, 'assets', 'images', 'icon-ios.png')
    icon.save(out1, 'PNG')
    print('wrote', out1, icon.size, icon.mode)
    icon_set = os.path.join(BASE, 'ios', 'App', 'App', 'Assets.xcassets', 'AppIcon.appiconset')
    os.makedirs(icon_set, exist_ok=True)
    out2 = os.path.join(icon_set, 'AppIcon-512@2x.png')
    icon.save(out2, 'PNG')
    print('wrote', out2, icon.size, icon.mode)


if __name__ == '__main__':
    main()
