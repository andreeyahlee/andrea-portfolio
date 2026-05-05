import { DisplayXL, DisplayL, DisplayM, DisplayS, BodyL, BodyLBold, Body, BodyBold, Label, LabelBold, Button } from './components/Typography';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1f2b1f] p-8 text-[#eae8e0]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Display Typography */}
        <section className="space-y-8">
          <Label>Display Typography</Label>

          <div className="space-y-6">
            <DisplayXL className="leading-none">
              <p className="mb-0">Display XL</p>
              <p className="text-[#a1ad49]">96px DM Sans Semibold</p>
            </DisplayXL>

            <DisplayL className="leading-none">
              <p className="mb-0">Display Large</p>
              <p className="text-[#a1ad49]">64px DM Sans Bold</p>
            </DisplayL>

            <DisplayM className="leading-[0.98]">
              Display Medium · 48px DM Sans Medium
            </DisplayM>

            <DisplayS className="leading-[0.98]">
              Display Small · 32px DM Sans Medium
            </DisplayS>
          </div>
        </section>

        {/* Body Typography */}
        <section className="space-y-6">
          <Label>Body Typography</Label>

          <BodyL className="max-w-3xl">
            <p className="leading-normal">
              Body Large: This is the primary body text style used for introductions and important content.
              It uses Plus Jakarta Sans Medium at 20px with normal line height for optimal readability.
            </p>
          </BodyL>

          <div className="max-w-3xl">
            <BodyLBold className="leading-normal text-[#dce888] mb-2">
              Body Large Bold Heading
            </BodyLBold>
            <BodyL>
              <p className="leading-normal">
                This combination is perfect for section headings followed by descriptive text.
                The bold variant at 20px provides clear visual hierarchy while maintaining consistency.
              </p>
            </BodyL>
          </div>

          <Body className="max-w-3xl">
            <p className="leading-normal">
              Body Regular: The standard 16px text style for general content and UI elements.
              Uses Plus Jakarta Sans Medium for comfortable reading across all devices.
            </p>
          </Body>
        </section>

        {/* Label Typography */}
        <section className="space-y-6">
          <Label>Label Typography</Label>

          <div className="space-y-4 border-b border-[#f3f2ec] pb-4">
            <div className="flex items-center justify-between">
              <LabelBold className="leading-normal">Category Label</LabelBold>
              <Body>
                <p className="leading-normal">Supporting text</p>
              </Body>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="leading-normal">Regular Label</Label>
            <Body>
              <p className="leading-normal">
                Labels use JetBrains Mono, a monospaced font perfect for metadata,
                categories, and technical information. Always rendered in uppercase.
              </p>
            </Body>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="space-y-6">
          <Label>Interactive Elements</Label>

          <div className="bg-[#f3f2ec] px-8 py-4 rounded-full inline-flex items-center justify-center">
            <Button className="text-black leading-normal">
              <p className="leading-normal whitespace-pre">TRY THE DASHBOARD →</p>
            </Button>
          </div>
        </section>

        {/* Color Combinations */}
        <section className="space-y-6">
          <Label>Color Combinations</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <BodyLBold className="text-[#a1ad49] leading-normal">Primary Accent</BodyLBold>
              <Body>
                <p className="leading-normal">#a1ad49 - Used for emphasis and highlights</p>
              </Body>
            </div>

            <div className="space-y-2">
              <BodyLBold className="text-[#dce888] leading-normal">Secondary Accent</BodyLBold>
              <Body>
                <p className="leading-normal">#dce888 - Used for headings and important info</p>
              </Body>
            </div>

            <div className="space-y-2">
              <BodyLBold className="text-[#eae8e0] leading-normal">Body Text</BodyLBold>
              <Body>
                <p className="leading-normal">#eae8e0 - Primary text color on dark backgrounds</p>
              </Body>
            </div>

            <div className="space-y-2 bg-[#f3f2ec] p-4 rounded-lg">
              <BodyLBold className="text-black leading-normal">Light Background</BodyLBold>
              <Body>
                <p className="leading-normal text-black">#f3f2ec - Light surface for contrast</p>
              </Body>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}