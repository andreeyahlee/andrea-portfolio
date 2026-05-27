<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>andrealee.co — Master PRD v2</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
:root{
  --bg:#F4F4EB;--ink:#21281A;--body:#333F2E;--mid:#6B7060;
  --rule:#DFE0DE;--putty:#EBEAE0;--lime:#DEE895;--white:#FFFFFF;
  --red:#9b4a4a;--red-bg:#F5F0F0;
  --green:#2b7a3a;--green-bg:#d8f0e0;
  --gold:#7a5500;--gold-bg:#fdf5e0;
  --sel:#304C95;--sel-bg:#D8E0F0;
  --arvo:#31332A;--arvo-bg:#F4EFE6;--arvo-card:#DCD6C8;
  --ph:#D09A94;--ph-bg:#F7F6F4;
  --code:#111612;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--ink);font-size:14px;line-height:1.7;-webkit-font-smoothing:antialiased;}
.page{max-width:920px;margin:0 auto;padding:60px 40px 120px;}

/* HEADER */
.doc-header{padding-bottom:28px;border-bottom:3px solid var(--ink);margin-bottom:0;}
.doc-eyebrow{font-family:'DM Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.14em;color:var(--mid);margin-bottom:10px;}
.doc-title{font-family:'DM Serif Display',serif;font-size:38px;line-height:1.04;letter-spacing:-1.5px;margin-bottom:10px;}
.doc-sub{font-size:14px;color:var(--body);line-height:1.7;max-width:640px;margin-bottom:18px;}
.doc-pills{display:flex;flex-wrap:wrap;gap:6px;}
.dpill{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;padding:4px 10px;border-radius:3px;background:var(--putty);color:var(--mid);}
.dpill.on{background:var(--ink);color:var(--lime);}

/* TOC */
.toc{background:var(--ink);border-radius:8px;padding:24px 28px;margin:32px 0 52px;}
.toc-label{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.12em;color:var(--lime);margin-bottom:14px;}
.toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px 32px;}
.toc-item{font-size:12.5px;color:rgba(255,255,255,0.5);line-height:1.8;}
.toc-item a{color:rgba(255,255,255,0.5);text-decoration:none;}
.toc-item a:hover{color:var(--lime);}
.toc-n{font-family:'DM Mono',monospace;font-size:10px;color:var(--lime);margin-right:8px;}

/* SECTIONS */
.section{margin-bottom:68px;scroll-margin-top:24px;}
.sec-eyebrow{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.14em;color:var(--mid);margin-bottom:6px;}
.sec-title{font-family:'DM Serif Display',serif;font-size:24px;margin-bottom:20px;padding-bottom:12px;border-bottom:1px solid var(--rule);}
.body-text{font-size:13.5px;color:var(--body);line-height:1.72;margin-bottom:12px;}

/* STANDARD CARDS */
.standard-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0;}
.sc{border-radius:6px;padding:18px;border:1px solid var(--rule);background:var(--white);}
.sc-name{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--mid);margin-bottom:6px;display:block;}
.sc-title{font-size:13px;font-weight:500;color:var(--ink);margin-bottom:8px;line-height:1.35;}
.sc-body{font-size:12px;color:var(--body);line-height:1.55;}
.sc-rule{border-color:var(--lime);border-width:1px;border-style:solid;border-top:3px solid var(--lime);}

/* STORY ARC */
.arc{border:1px solid var(--rule);border-radius:6px;overflow:hidden;margin:14px 0;background:var(--white);}
.arc-header{background:var(--ink);padding:12px 18px;display:flex;justify-content:space-between;align-items:center;}
.arc-header strong{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--lime);}
.arc-header span{font-family:'DM Mono',monospace;font-size:9px;color:rgba(255,255,255,0.4);}
.arc-row{display:grid;grid-template-columns:80px 1fr;border-bottom:1px solid var(--rule);}
.arc-row:last-child{border-bottom:none;}
.arc-act{padding:14px 16px;border-right:1px solid var(--rule);display:flex;flex-direction:column;align-items:flex-start;gap:4px;}
.arc-act-n{font-family:'DM Mono',monospace;font-size:9px;color:var(--lime);font-weight:500;}
.arc-act-label{font-size:10px;font-weight:500;color:var(--ink);text-transform:uppercase;letter-spacing:0.06em;}
.arc-content{padding:14px 18px;}
.arc-content .hook{font-family:'DM Serif Display',serif;font-size:15px;color:var(--ink);margin-bottom:8px;line-height:1.35;font-style:italic;}
.arc-content p{font-size:12.5px;color:var(--body);line-height:1.6;margin-bottom:6px;}
.arc-content p:last-child{margin-bottom:0;}
.arc-content strong{color:var(--ink);}
.arc-content em{color:var(--mid);}
.arc-row.act-hook{background:var(--arvo-bg);}
.arc-row.act-hook .arc-act{background:var(--arvo);}
.arc-row.act-hook .arc-act-n,.arc-row.act-hook .arc-act-label{color:white;}

/* RULES TABLE */
.rules{display:grid;gap:1px;background:var(--rule);border:1px solid var(--rule);border-radius:6px;overflow:hidden;margin:14px 0;}
.rule-row{display:grid;grid-template-columns:24px 140px 1fr;background:var(--white);align-items:start;}
.rule-row.header{background:var(--ink);}
.rr-num{font-family:'DM Mono',monospace;font-size:10px;color:var(--mid);padding:12px 8px 12px 14px;text-align:center;}
.rr-label{font-size:12px;font-weight:500;padding:12px 12px;border-right:1px solid var(--rule);line-height:1.4;}
.rr-body{font-size:12.5px;color:var(--body);padding:12px 14px;line-height:1.55;}
.rule-row.header .rr-num,.rule-row.header .rr-label,.rule-row.header .rr-body{color:white;font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.08em;border-color:rgba(255,255,255,0.1);}
.rule-row.blocked{background:var(--red-bg);}
.rule-row.blocked .rr-label{color:var(--red);}

/* CALLOUT */
.callout{border-left:3px solid var(--sel);background:var(--sel-bg);padding:12px 16px;border-radius:0 4px 4px 0;margin:12px 0;font-size:13px;line-height:1.6;}
.callout strong{color:var(--sel);}
.callout.green{border-color:var(--green);background:var(--green-bg);}
.callout.green strong{color:var(--green);}
.callout.warn{border-color:var(--gold);background:var(--gold-bg);}
.callout.warn strong{color:var(--gold);}
.callout.red{border-color:var(--red);background:var(--red-bg);}
.callout.red strong{color:var(--red);}
.callout.ink{background:var(--ink);border-color:var(--lime);padding:18px 22px;}
.callout.ink p{color:rgba(255,255,255,0.72);font-size:13px;line-height:1.68;}
.callout.ink strong{color:var(--lime);}

/* STAT TABLE */
.stat-table{width:100%;border-collapse:collapse;margin:14px 0;font-size:12.5px;}
.stat-table th{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.08em;text-align:left;padding:9px 14px;background:var(--ink);color:white;}
.stat-table td{padding:10px 14px;border-bottom:1px solid var(--rule);vertical-align:top;line-height:1.55;}
.stat-table tr:nth-child(even) td{background:#f5f5f0;}
.stat-table td strong{color:var(--ink);}

/* PROBLEM MAP */
.prob-map{border:1px solid var(--rule);border-radius:6px;overflow:hidden;margin:14px 0;}
.pm-header{background:var(--arvo);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;}
.pm-header span{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.5);}
.pm-header strong{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--lime);}
.pm-row{display:grid;grid-template-columns:28px 1fr auto;padding:10px 14px;border-bottom:1px solid var(--arvo-card);gap:12px;align-items:start;background:var(--arvo-bg);}
.pm-row:last-child{border-bottom:none;background:var(--arvo-card);}
.pm-icon{font-family:'DM Mono',monospace;font-size:11px;padding-top:2px;}
.pm-text{font-size:12.5px;color:var(--body);line-height:1.5;}
.pm-text strong{color:var(--ink);display:block;font-size:12px;}
.pm-tag{font-family:'DM Mono',monospace;font-size:9px;padding:2px 8px;border-radius:3px;white-space:nowrap;margin-top:2px;}
.pt-s{background:var(--green-bg);color:var(--green);}
.pt-r{background:var(--arvo-card);color:var(--arvo);}
.pt-n{background:var(--gold-bg);color:var(--gold);}
.pt-b{background:var(--lime);color:var(--arvo);}

/* ROLE GRID */
.role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0;}
.rc{border-radius:6px;padding:18px;border:1px solid var(--rule);}
.rc-arvo{background:var(--arvo-bg);border-top:3px solid var(--arvo);}
.rc-sel{background:var(--sel-bg);border-top:3px solid var(--sel);}
.rc-ph{background:var(--ph-bg);border-top:3px solid var(--ph);}
.rc-proj{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--mid);margin-bottom:6px;display:block;}
.rc-role{font-family:'DM Serif Display',serif;font-size:16px;color:var(--ink);margin-bottom:8px;line-height:1.2;}
.rc-meta{font-size:11.5px;color:var(--body);line-height:1.65;}
.rc-warn{font-size:11px;color:var(--red);margin-top:8px;font-style:italic;line-height:1.5;}

/* IMAGE LIST */
.img-list{border:1px solid var(--rule);border-radius:6px;overflow:hidden;margin:12px 0;}
.il-head{padding:10px 16px;display:flex;justify-content:space-between;}
.il-row{display:grid;grid-template-columns:36px 1fr auto;padding:10px 14px;border-bottom:1px solid var(--rule);gap:10px;background:var(--white);align-items:start;}
.il-row:last-child{border-bottom:none;}
.il-id{font-family:'DM Mono',monospace;font-size:10px;color:var(--mid);padding-top:2px;font-weight:500;}
.il-info strong{font-family:'DM Mono',monospace;font-size:11px;display:block;color:var(--ink);margin-bottom:2px;}
.il-info span{font-size:12px;color:var(--body);line-height:1.45;}
.il-tag{font-family:'DM Mono',monospace;font-size:9px;padding:3px 8px;border-radius:3px;white-space:nowrap;display:inline-block;}
.it-now{background:#ffe0e0;color:var(--red);}
.it-figma{background:var(--sel-bg);color:var(--sel);}
.it-create{background:var(--gold-bg);color:var(--gold);}

/* PROMPT BLOCKS */
.prompt{background:var(--code);border-radius:8px;padding:26px 30px;margin:16px 0;}
.prompt-label{font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.12em;color:var(--lime);margin-bottom:14px;display:flex;align-items:center;gap:8px;}
.prompt-label::before{content:'▶';font-size:9px;}
.prompt p{font-size:13px;color:#ddd;line-height:1.72;margin-bottom:10px;}
.prompt p:last-child{margin-bottom:0;}
.prompt strong{color:var(--lime);}
.prompt em{color:#93A8D0;font-style:normal;}
.ps{color:rgba(255,255,255,0.3);font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.12em;display:block;margin:16px 0 6px;border-top:1px solid rgba(255,255,255,0.07);padding-top:12px;}
.cmd{font-family:'DM Mono',monospace;font-size:12px;color:#e0e0e0;background:rgba(255,255,255,0.06);padding:10px 14px;border-radius:4px;margin:8px 0;display:block;line-height:1.5;}

/* STEPS */
.steps{display:grid;gap:8px;margin:14px 0;}
.step-item{display:grid;grid-template-columns:40px 1fr;gap:14px;padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-radius:6px;align-items:start;}
.step-num{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'DM Mono',monospace;font-size:11px;font-weight:500;color:white;flex-shrink:0;}
.sn-r{background:var(--red);}
.sn-g{background:var(--gold);}
.sn-b{background:var(--sel);}
.sn-gn{background:var(--green);}
.step-text strong{display:block;font-size:13px;margin-bottom:4px;}
.step-text span{font-size:12.5px;color:var(--body);line-height:1.55;}

@media(max-width:640px){
  .page{padding:40px 20px 80px;}
  .toc-grid{grid-template-columns:1fr;}
  .standard-grid,.role-grid{grid-template-columns:1fr;}
  .arc-row{grid-template-columns:1fr;}
  .arc-act{border-right:none;border-bottom:1px solid var(--rule);}
}
</style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-eyebrow">Master PRD v2 · andrealee.co · Final guidance · May 2026</div>
    <h1 class="doc-title">Everything agreed.<br><em style="color:var(--mid);">One document. Final.</em></h1>
    <p class="doc-sub">Red team · ui-ux-pro-max-skill · Framer Motion spring physics · 21st.dev component standards · Studio Namma GSAP · Simon Pan narrative arc · Senior-designer-standard case studies. Andrea Lee.</p>
    <div class="doc-pills">
      <span class="dpill on">Studio Namma GSAP</span>
      <span class="dpill on">Framer Motion spring</span>
      <span class="dpill on">21st.dev standards</span>
      <span class="dpill on">ui-ux-pro-max-skill</span>
      <span class="dpill on">Dark / light mode</span>
      <span class="dpill on">Phase 1 + Phase 2</span>
      <span class="dpill on">Andrea Lee</span>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-label">Contents</div>
    <div class="toc-grid">
      <div class="toc-item"><span class="toc-n">00</span><a href="#standard">The standard we're building for</a></div>
      <div class="toc-item"><span class="toc-n">01</span><a href="#writingrules">Writing rules — the anti-lame guide</a></div>
      <div class="toc-item"><span class="toc-n">02</span><a href="#arcs">Case study narrative arcs — rewritten</a></div>
      <div class="toc-item"><span class="toc-n">03</span><a href="#stats">Locked stats + roles</a></div>
      <div class="toc-item"><span class="toc-n">04</span><a href="#assets">Asset checklist — 15 images</a></div>
      <div class="toc-item"><span class="toc-n">05</span><a href="#setup">Setup — skill install + GitHub sync</a></div>
      <div class="toc-item"><span class="toc-n">06</span><a href="#phase1">Phase 1 — homepage rebuild prompt</a></div>
      <div class="toc-item"><span class="toc-n">07</span><a href="#phase2">Phase 2 — Studio Namma GSAP prompt</a></div>
      <div class="toc-item"><span class="toc-n">08</span><a href="#casestudies">Case study build prompts — all three</a></div>
      <div class="toc-item"><span class="toc-n">09</span><a href="#about">About page prompt</a></div>
      <div class="toc-item"><span class="toc-n">10</span><a href="#order">Order of operations</a></div>
    </div>
  </div>

  <!-- ═══ 00 THE STANDARD ═══ -->
  <div class="section" id="standard">
    <div class="sec-eyebrow">00 — The standard</div>
    <h2 class="sec-title">What we're building toward — named references</h2>

    <p class="body-text">Every decision in this PRD is benchmarked against these designers and formats. When in doubt, ask: would Simon Pan put this in his case study? Would Airbnb's design team accept this level of visual evidence?</p>

    <div class="standard-grid">
      <div class="sc sc-rule">
        <span class="sc-name">Case study narrative — Simon Pan, ex-Google</span>
        <div class="sc-title">UberEATS case study — considered best-written in the industry</div>
        <div class="sc-body">Narrative arc: context → challenge → exploration → solution → impact. Dense enterprise work made accessible to non-designers. Rule: if your non-designer parent can't follow the story, rewrite it.</div>
      </div>
      <div class="sc sc-rule">
        <span class="sc-name">Story + passion — Yutong & Yunan Xue, ex-Airbnb</span>
        <div class="sc-title">Airbnb China case study — they got hired with a personal project</div>
        <div class="sc-body">Human story first, methodology second. They flew to LA to do field research for a personal project. Hiring managers saw the passion before the process. Rule: show you cared deeply, not that you followed a framework.</div>
      </div>
      <div class="sc sc-rule">
        <span class="sc-name">Strategic impact — Arin Bhowmick, VP Design IBM</span>
        <div class="sc-title">Senior portfolios don't show what you designed. They show what you made possible.</div>
        <div class="sc-body">At senior level, hiring decisions center on business impact, not pixel craft. Rule: lead with the decision you made and its consequence — not the method you used to arrive there.</div>
      </div>
    </div>

    <div class="callout ink">
      <p><strong>The hiring manager test (from UX Playbook research):</strong> Senior hiring managers spend 6–8 seconds on initial portfolio scan before deciding to go deeper. Your homepage card, your case study headline, and your opening stat — those 3 elements either earn the next 3 minutes or lose them. Build everything else for the reader who has already decided to stay.</p>
    </div>

    <div class="standard-grid">
      <div class="sc">
        <span class="sc-name">Visual storytelling — Stefan Ostermann</span>
        <div class="sc-title">Large visuals, short punchy text. Portfolio visitors are skimming.</div>
        <div class="sc-body">Every text block has a visual companion. Images do the argument. Text names the decision. Rule: if you need 3 sentences to explain a design choice, you need an image instead.</div>
      </div>
      <div class="sc">
        <span class="sc-name">Impact-led — Rachel Hanna Green</span>
        <div class="sc-title">"Doesn't bury the lede — leads with impact."</div>
        <div class="sc-body">Open every case study with the most interesting thing that happened. Not "I started by doing research." But "we killed a two-week design direction because 3.0/5 told us it was wrong." Rule: most interesting thing first, always.</div>
      </div>
      <div class="sc">
        <span class="sc-name">Research as narrative — Katie McCurdy</span>
        <div class="sc-title">Research artifacts facilitate understanding — they're not footnotes.</div>
        <div class="sc-body">Affinity maps, card sorts, and testing notes are visual storytelling tools. Show them in context. Rule: research methodology explained in prose = junior signal. Research finding shown in a photo = senior signal.</div>
      </div>
    </div>
  </div>

  <!-- ═══ 01 WRITING RULES ═══ -->
  <div class="section" id="writingrules">
    <div class="sec-eyebrow">01 — Writing rules</div>
    <h2 class="sec-title">The anti-lame guide — apply to every word on the site</h2>

    <div class="callout red"><strong>The core problem with your current case studies:</strong> They read like project reports. Long paragraphs explaining what you did and why, with occasional numbers. A hiring manager at Google reads 200 applications a month. They are not reading your paragraphs. They are scanning your headlines, looking at your images, and reading your outcome stats. Everything else has to earn its place.</div>

    <div class="rules">
      <div class="rule-row header">
        <div class="rr-num">#</div>
        <div class="rr-label">Rule</div>
        <div class="rr-body">What it means in practice</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">1</div>
        <div class="rr-label">Plain English first</div>
        <div class="rr-body">Write for your smartest non-designer friend. If they'd need to google a term, rewrite it. "Information architecture redesign" → "we reorganised how everything is grouped." "Usability testing" → "we watched real people try to use it." Every term earns its place.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">2</div>
        <div class="rr-label">Lead with the most interesting thing</div>
        <div class="rr-body">Every section opens with the most surprising, counterintuitive, or specific thing that happened. Not "we conducted research to understand user needs." But "every single person we interviewed chose Seletar for one reason: it saves 45 minutes of KL traffic. The website had nothing to do with it."</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">3</div>
        <div class="rr-label">Max 2 sentences before a visual</div>
        <div class="rr-body">Two sentences maximum before an image, stat block, or quote. This is not a writing style guideline. It is a structure rule. Every text block that doesn't follow it gets rewritten or deleted. The visual carries the argument. The text names it.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">4</div>
        <div class="rr-label">Stats are headings, not footnotes</div>
        <div class="rr-body">83%. 93%. 4.8/5. 100% (5/5). These live in large visual stat blocks — never embedded in body text. A hirer scanning for 8 seconds will see a number in a stat block. They will not find it in a sentence.</div>
      </div>
      <div class="rule-row blocked">
        <div class="rr-num">✕</div>
        <div class="rr-label">Banned phrases</div>
        <div class="rr-body">user-centred · user experience · leveraging · ideating · pain points · touchpoints · delightful · user journey · stakeholder · deliverables · robust · seamless · actionable insights · holistic approach · moving the needle. Replace every one with the specific thing you actually mean.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">5</div>
        <div class="rr-label">Show the decision, not the process</div>
        <div class="rr-body">Hirers don't want to know you did an affinity map. They want to know what the affinity map told you that changed what you built. "We ran an affinity mapping session" → delete. "The mapping showed that speed was the only thing that mattered to these users — not amenities, not design" → keep.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">6</div>
        <div class="rr-label">Word count limit</div>
        <div class="rr-body">Max 350 words of prose per case study. Everything else is visual. If you're over 350 words, cut the methodology descriptions first. "We used thematic analysis to synthesise the data from 12 semi-structured interviews" = cut. "Here's what the interviews found" + a finding card = keep.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">7</div>
        <div class="rr-label">One failure, openly named</div>
        <div class="rr-body">Every case study has one failure moment shown plainly. Seletar: "We cut the section we'd spent two weeks building. It scored 3.0." ARVO: "We couldn't fix five of the seven problems the client asked for." PetHaus: "80% of testers missed the reorder section in version 1." This is the moment senior hirers remember.</div>
      </div>
      <div class="rule-row">
        <div class="rr-num">8</div>
        <div class="rr-label">Write like you're telling a friend about it</div>
        <div class="rr-body">Read every paragraph aloud. If it sounds like a report, rewrite it in the voice you'd use telling a smart friend what happened over dinner. That voice is the right voice for a portfolio. Not formal, not casual — just honest and specific.</div>
      </div>
    </div>
  </div>

  <!-- ═══ 02 NARRATIVE ARCS ═══ -->
  <div class="section" id="arcs">
    <div class="sec-eyebrow">02 — Narrative arcs</div>
    <h2 class="sec-title">The story each case study tells — rewritten for humans</h2>

    <p class="body-text">These are the story arcs for each case study. Every section of every case study should be traceable back to one of these arc moments. If a section doesn't advance the story, it's cut.</p>

    <!-- ARVO ARC -->
    <div class="arc">
      <div class="arc-header"><strong>ARVO — client-approved · B2B SaaS · 2026</strong><span>Project Lead PM + UX · Team of 6</span></div>
      <div class="arc-row act-hook">
        <div class="arc-act"><span class="arc-act-n">HOOK</span><span class="arc-act-label">1 sentence</span></div>
        <div class="arc-content">
          <div class="hook">"A startup hired us to fix seven problems with their manager tool. We fixed two. Here's why that was exactly right."</div>
          <p>This is the headline. It earns the read. It's counterintuitive — fixing less than you were asked is a strength, not a failure. Anyone can understand it. No UX knowledge required.</p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n">ACT 1</span><span class="arc-act-label">The real problem</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> 83% of the managers we interviewed weren't using ARVO. Not because they didn't care about their teams. Because opening the dashboard felt like getting another work email on a Sunday. It asked for effort at the exact moment people had none.</p>
          <p><em>What to show here: original dashboard screenshot. The 83% stat block. One quote from an interview.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n">ACT 2</span><span class="arc-act-label">The decision</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> We found seven problems. Five of them — the anonymity problem, the culture problem, the jargon problem, the resignation problem — those were management and culture issues. No interface fixes those. We told the founder directly. She said it was the most useful thing we gave her.</p>
          <p><em>What to show here: the 7-problem map (visual). The two problems we solved, highlighted. The five returned, greyed out. The brightspot starred.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n">ACT 3</span><span class="arc-act-label">What we built</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> Two problems we could actually fix. First: the dashboard was unreadable — every signal looked the same, nothing stood out. We replaced the table with a traffic light. Red means something needs attention right now. Second: every recommendation felt like homework. "Micro-experiment" — no manager knows what that means. We rewrote every label in plain English.</p>
          <p><em>What to show here: traffic light before/after image. Label comparison image. Each gets one sentence of text, then the image.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n">ACT 4</span><span class="arc-act-label">The outcome</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> 93% of managers in our testing said the redesigned dashboard was useful. The founder approved it and called our recommendations "immediately actionable."</p>
          <p><em>What to show here: 83%→93% stat blocks. Eileen's testimonial pull quote. Final dashboard screenshot.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n">CODA</span><span class="arc-act-label">The honest reflection</span></div>
        <div class="arc-content">
          <p><strong>One sentence:</strong> "I should have named the scope boundary on day one, not week four — it would have made everything that followed faster and more focused."</p>
        </div>
      </div>
    </div>

    <!-- SELETAR ARC -->
    <div class="arc" style="margin-top:20px;">
      <div class="arc-header" style="background:var(--sel);"><strong>Seletar Airport — self-initiated · 2025–26</strong><span style="color:rgba(255,255,255,0.4);">Lead UX Researcher · Team of 3</span></div>
      <div class="arc-row act-hook" style="background:var(--sel-bg);">
        <div class="arc-act" style="background:var(--sel);">
          <span class="arc-act-n">HOOK</span><span class="arc-act-label" style="color:white;">1 sentence</span></div>
        <div class="arc-content">
          <div class="hook" style="color:var(--sel);">"Nobody was using the Seletar Airport website. They were using Reddit instead. We had to understand why before we could fix it."</div>
          <p>Anyone can understand this. The Reddit detail is specific and memorable. It shows the problem without any UX language at all.</p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--sel);">ACT 1</span><span class="arc-act-label">The finding</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> We interviewed nine people who had flown from Seletar. Every single one chose it for the same reason: Firefly lands at Subang Airport in KL, which saves 45 to 90 minutes of traffic versus KLIA. The website had nothing to do with their choice. It had never been worth opening.</p>
          <p><em>What to show here: original Seletar website screenshot. "9/9 chose Seletar for speed" stat block. One quote.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--sel);">ACT 2</span><span class="arc-act-label">The failure</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> We spent two weeks designing a section to explain what turboprop aircraft were. We thought passengers were anxious about flying in smaller planes. We tested it. It scored 3.0 out of 5. Most users didn't care about the planes at all. We cut the entire section.</p>
          <p><em>What to show here: V1 Passenger Guide screenshot. 3.0/5 stat block — bold, prominent. Caption: "We cut it."</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--sel);">ACT 3</span><span class="arc-act-label">The pivot</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> The website had one job. Someone needs to know their flight time and how to get to Subang Airport from the arrival terminal. That's it. We redesigned around speed — flight schedule front and centre, transport options that matched the moment (leaving, not arriving). Even the button label mattered: "Check Status" confused people into thinking they needed a ticket number. "View Flight Schedule" got them where they needed to go immediately.</p>
          <p><em>What to show here: label comparison image. V2 dashboard screenshot.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--sel);">ACT 4</span><span class="arc-act-label">The outcome</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> The redesigned site scored 4.8 out of 5 on the core task. One tester's exact words: "Brilliant. 5 out of 5."</p>
          <p><em>What to show here: 3.0→4.8 stat blocks. "Brilliant. 5 out of 5." pull quote.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--sel);">CODA</span><span class="arc-act-label">Reflection</span></div>
        <div class="arc-content">
          <p><strong>One sentence:</strong> "Good research doesn't validate what you've built. It tells you what you should have been building all along."</p>
        </div>
      </div>
    </div>

    <!-- PETHAUS ARC -->
    <div class="arc" style="margin-top:20px;">
      <div class="arc-header" style="background:var(--ph);color:var(--ink);"><strong>Paw Haus — self-initiated · 2025</strong><span style="color:rgba(33,40,26,0.4);">Solo Product Designer · End to end</span></div>
      <div class="arc-row act-hook" style="background:var(--ph-bg);">
        <div class="arc-act" style="background:var(--ph);">
          <span class="arc-act-n" style="color:var(--arvo);">HOOK</span><span class="arc-act-label" style="color:var(--arvo);">1 sentence</span></div>
        <div class="arc-content">
          <div class="hook" style="color:var(--ph);">"Every pet supply website is a wall of products. We built one that knows your pet before you search."</div>
          <p>Simple. Visual. The contrast is immediately clear to anyone who's ever tried to find pet food online. No UX knowledge needed.</p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--ph);">ACT 1</span><span class="arc-act-label">The discovery</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> We talked to 12 pet owners. None of them described shopping. They described anxiety. Getting home, checking the ingredient list, googling whether something was safe for their specific dog. They weren't customers browsing options. They were worried parents checking labels.</p>
          <p><em>What to show here: competitor screenshot (wall of brands). Affinity map from card sort. "12 owners interviewed, zero described browsing" insight card.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--ph);">ACT 2</span><span class="arc-act-label">The reframe</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> Every competitor organises by brand and price. We organised by the pet. You enter your dog's breed, age, and any health conditions before you see a single product. The homepage doesn't show what's popular. It shows what's safe for Teddy.</p>
          <p><em>What to show here: onboarding 3-screen strip (breed → health → personalised). Side-by-side of competitor homepage vs PetHaus homepage.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--ph);">ACT 3</span><span class="arc-act-label">The detail that matters</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> We had to decide how to flag unsafe products. A warning tag ("Not suitable for pets with kidney conditions") makes an owner feel they nearly made a dangerous mistake. A match indicator ("100% match for Teddy") makes them feel the site is looking out for them. Same information. Completely different emotional experience. We chose the second.</p>
          <p><em>What to show here: warning tag vs match indicator — two identical product card crops, one label each. No explanation needed beyond the image.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--ph);">ACT 4</span><span class="arc-act-label">The outcome</span></div>
        <div class="arc-content">
          <p><strong>Plain English version:</strong> Every one of our five testers found a safe, allergen-free product for their specific pet — without needing to go to a physical store or call a vet to check. Trust score: 4.8 out of 5.</p>
          <p><em>What to show here: 100% (5/5) stat block. 4.8/5 stat block. Final personalised homepage screenshot.</em></p>
        </div>
      </div>
      <div class="arc-row">
        <div class="arc-act"><span class="arc-act-n" style="color:var(--ph);">CODA</span><span class="arc-act-label">Reflection</span></div>
        <div class="arc-content">
          <p><strong>One sentence:</strong> "If I couldn't find it in the research, I didn't build it."</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 03 STATS + ROLES ═══ -->
  <div class="section" id="stats">
    <div class="sec-eyebrow">03 — Locked stats + roles</div>
    <h2 class="sec-title">Facts that never change</h2>

    <table class="stat-table">
      <thead><tr><th>Project</th><th>Research</th><th>Other</th><th>Testing</th><th>Key stats</th></tr></thead>
      <tbody>
        <tr><td>ARVO</td><td>12 interviews · 8 industries</td><td>Workshop · affinity mapping</td><td>13 testers · 8 industries</td><td><strong>83% (10/12)</strong> rejected original<br><strong>93% (12/13)</strong> validated redesign<br><strong>2 of 7</strong> problems solved</td></tr>
        <tr><td>Seletar</td><td>9 interviews (8 Firefly + 1 private jet)</td><td>IA audit · content gap analysis</td><td>11 testers (5 V1 + 6 V2)</td><td><strong>3.0/5</strong> Passenger Guide cut<br><strong>4.8/5</strong> flight tool V2<br><strong>9/9</strong> chose Seletar for speed</td></tr>
        <tr><td>Paw Haus</td><td>12 discovery interviews</td><td>15 card sorters</td><td>5 testers</td><td><strong>100% (5/5)</strong> found safe food<br><strong>20% (1/5)</strong> reorder success V1<br><strong>4.8/5</strong> trust score</td></tr>
      </tbody>
    </table>

    <div class="prob-map">
      <div class="pm-header"><strong>ARVO — 7 problems</strong><span>2 solved · 5 returned · 1 brightspot protected</span></div>
      <div class="pm-row"><div class="pm-icon" style="color:var(--green);">✓</div><div class="pm-text"><strong>Manager's Paradox</strong>No capacity to engage a dense dashboard while managing execution</div><span class="pm-tag pt-s">Solved</span></div>
      <div class="pm-row"><div class="pm-icon" style="color:var(--green);">✓</div><div class="pm-text"><strong>Cognitive Overload</strong>All signals equal weight — nothing scannable, no hierarchy</div><span class="pm-tag pt-s">Solved</span></div>
      <div class="pm-row" style="opacity:0.7;"><div class="pm-icon" style="color:var(--mid);">→</div><div class="pm-text"><strong>Jargon & Mgt 101</strong>"Micro-experiment" confused managers. 50% (6/12) found AI tips too generic</div><span class="pm-tag pt-r">Returned</span></div>
      <div class="pm-row" style="opacity:0.7;"><div class="pm-icon" style="color:var(--mid);">→</div><div class="pm-text"><strong>Honesty Gap / Anonymity</strong>Managers won't engage honestly on a company-owned platform</div><span class="pm-tag pt-r">Returned</span></div>
      <div class="pm-row" style="opacity:0.7;"><div class="pm-icon" style="color:var(--mid);">→</div><div class="pm-text"><strong>Structural Resignation</strong>Disengagement was cultural — not a tool problem</div><span class="pm-tag pt-r">Returned</span></div>
      <div class="pm-row" style="opacity:0.7;border-top:1px dashed var(--arvo-card);"><div class="pm-icon" style="color:var(--gold);">+</div><div class="pm-text"><strong>Accessibility Crisis</strong>Unreadable interface at standard viewing distance <em style="font-size:11px;color:var(--mid);">(found in testing)</em></div><span class="pm-tag pt-n">New</span></div>
      <div class="pm-row" style="opacity:0.7;"><div class="pm-icon" style="color:var(--gold);">+</div><div class="pm-text"><strong>Digital Homework Trap</strong>Managers treating recommendations as a checklist to complete after hours <em style="font-size:11px;color:var(--mid);">(found in testing)</em></div><span class="pm-tag pt-n">New</span></div>
      <div class="pm-row"><div class="pm-icon">★</div><div class="pm-text"><strong>Brightspot — Energizers & Drainers</strong>The one feature managers actually used. Recommendation: protect it, don't redesign it</div><span class="pm-tag pt-b">Protected</span></div>
    </div>

    <div class="role-grid">
      <div class="rc rc-arvo">
        <span class="rc-proj">ARVO · 2026</span>
        <div class="rc-role">Project Lead<br>PM + UX</div>
        <div class="rc-meta">Client-approved · Team of 6<br>Led all 12 research interviews<br>Made scoping decision (5 of 7 returned)<br>Protected the brightspot<br>Ran both rounds of usability testing<br>Communicated directly to founder</div>
      </div>
      <div class="rc rc-sel">
        <span class="rc-proj">Seletar Airport · 2025–26</span>
        <div class="rc-role">Lead UX<br>Researcher</div>
        <div class="rc-meta">Self-initiated · Team of 3<br>Melody = PM · Danna = Visual Design<br>Ran all 9 user interviews<br>Defined testing framework<br>Made call to kill V1 at 3.0/5<br>Research-led — not the designer</div>
        <div class="rc-warn">⚠ Caption all of Danna's design screens: "Visual design by Danna, informed by my research direction."</div>
      </div>
      <div class="rc rc-ph">
        <span class="rc-proj">Paw Haus · 2025</span>
        <div class="rc-role">Solo Product<br>Designer</div>
        <div class="rc-meta">Self-initiated · Solo end-to-end<br>12 discovery interviews<br>15 card sort participants<br>IA redesign + visual design<br>High-fidelity prototype<br>5 usability testers</div>
      </div>
    </div>
  </div>

  <!-- ═══ 04 ASSETS ═══ -->
  <div class="section" id="assets">
    <div class="sec-eyebrow">04 — Asset checklist</div>
    <h2 class="sec-title">Prepare these before writing a line of code</h2>

    <p class="body-text">Export at 2x PNG from Figma. Save to <code style="font-family:'DM Mono',monospace;background:var(--putty);padding:2px 5px;border-radius:3px;font-size:12px;">assets/images/</code>. Convert to WebP: <code style="font-family:'DM Mono',monospace;background:var(--putty);padding:2px 5px;border-radius:3px;font-size:12px;">for f in *.png; do cwebp "$f" -o "${f%.png}.webp"; done</code></p>

    <div class="img-list">
      <div class="il-head" style="background:var(--arvo);"><strong style="font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:white;">ARVO — 5 images</strong><span style="font-family:'DM Mono',monospace;font-size:9px;color:rgba(255,255,255,0.4);">All from Figma</span></div>
      <div class="il-row"><div class="il-id">A1</div><div class="il-info"><strong>arvo-original-dashboard.webp</strong><span>Original dashboard — dense, the "before." After first paragraph of Problem section.</span></div><span class="il-tag it-figma">Figma</span></div>
      <div class="il-row"><div class="il-id">A2</div><div class="il-info"><strong>arvo-workshop-photo.webp</strong><span>Workshop or affinity map photo. Crop/blur names. Proves research was real.</span></div><span class="il-tag it-figma">Photo</span></div>
      <div class="il-row"><div class="il-id">A3</div><div class="il-info"><strong>arvo-traffic-light.webp</strong><span>Before: text table. After: traffic light dial. One side-by-side image.</span></div><span class="il-tag it-create">Create</span></div>
      <div class="il-row"><div class="il-id">A4</div><div class="il-info"><strong>arvo-labels.webp</strong><span>"Strengths-use fit erosion" vs "Wrong Task, Wrong Person." Two text cards, one image.</span></div><span class="il-tag it-create">Create</span></div>
      <div class="il-row"><div class="il-id">A5</div><div class="il-info"><strong>arvo-final-dashboard.webp</strong><span>Final redesigned dashboard. Top of Outcomes section.</span></div><span class="il-tag it-figma">Figma</span></div>
    </div>

    <div class="img-list">
      <div class="il-head" style="background:var(--sel);"><strong style="font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:white;">Seletar — 5 images</strong><span style="font-family:'DM Mono',monospace;font-size:9px;color:rgba(255,255,255,0.4);">Figma + screenshots</span></div>
      <div class="il-row"><div class="il-id">S1</div><div class="il-info"><strong>seletar-original.webp</strong><span>Screenshot of seletarairport.com.sg today. 2 minutes.</span></div><span class="il-tag it-now">Do now</span></div>
      <div class="il-row"><div class="il-id">S2</div><div class="il-info"><strong>seletar-research.webp</strong><span>On-site testing photo or affinity map.</span></div><span class="il-tag it-figma">Photo</span></div>
      <div class="il-row"><div class="il-id">S3</div><div class="il-info"><strong>seletar-v1-cut.webp</strong><span>V1 Passenger Guide — the section that scored 3.0. Caption: "We cut it."</span></div><span class="il-tag it-figma">Figma V1</span></div>
      <div class="il-row"><div class="il-id">S4</div><div class="il-info"><strong>seletar-labels.webp</strong><span>"Check Status" vs "View Flight Schedule." Two button crops, one image.</span></div><span class="il-tag it-create">Create</span></div>
      <div class="il-row"><div class="il-id">S5</div><div class="il-info"><strong>seletar-v2.webp</strong><span>V2 dashboard — desktop + mobile. Caption: "Visual design by Danna, informed by my research."</span></div><span class="il-tag it-figma">Figma V2</span></div>
    </div>

    <div class="img-list">
      <div class="il-head" style="background:var(--ph);"><strong style="font-family:'DM Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;color:var(--arvo);">Paw Haus — 5 images</strong><span style="font-family:'DM Mono',monospace;font-size:9px;color:rgba(33,40,26,0.4);">Figma + screenshot</span></div>
      <div class="il-row"><div class="il-id">P1</div><div class="il-info"><strong>pethaus-competitor.webp</strong><span>Shopee or Lazada pet food section. The wall of brands. 2 minutes.</span></div><span class="il-tag it-now">Do now</span></div>
      <div class="il-row"><div class="il-id">P2</div><div class="il-info"><strong>pethaus-cardSort.webp</strong><span>Card sort output or affinity map from 15-participant session.</span></div><span class="il-tag it-figma">Photo</span></div>
      <div class="il-row"><div class="il-id">P3</div><div class="il-info"><strong>pethaus-tags.webp</strong><span>Warning tag vs match indicator — two identical product cards, different labels.</span></div><span class="il-tag it-create">Create</span></div>
      <div class="il-row"><div class="il-id">P4</div><div class="il-info"><strong>pethaus-onboarding.webp</strong><span>3-screen strip: breed → health → personalised feed. One horizontal export.</span></div><span class="il-tag it-figma">Figma</span></div>
      <div class="il-row"><div class="il-id">P5</div><div class="il-info"><strong>pethaus-homepage.webp</strong><span>"Personalised for Teddy" with match tags visible. Top of Outcomes.</span></div><span class="il-tag it-figma">Figma</span></div>
    </div>
  </div>

  <!-- ═══ 05 SETUP ═══ -->
  <div class="section" id="setup">
    <div class="sec-eyebrow">05 — Setup</div>
    <h2 class="sec-title">Once only — do before any Claude Code session</h2>

    <div class="prompt">
      <div class="prompt-label">Terminal — in order</div>
      <p><strong>Sync GitHub Desktop first:</strong> Fetch origin → Pull if available.</p>
      <p><strong>Navigate to your portfolio folder:</strong></p>
      <span class="cmd">cd ~/Desktop/andrea-portfolio</span>
      <p><strong>Install ui-ux-pro-max-skill CLI (once only):</strong></p>
      <span class="cmd">npm install -g uipro-cli</span>
      <p><strong>Initialise for Claude Code (once only — creates design-system/MASTER.md):</strong></p>
      <span class="cmd">uipro init --ai claude</span>
      <p><strong>Start Claude Code:</strong></p>
      <span class="cmd">claude</span>
      <p><strong>Every session opening message (always first):</strong> "Please read design-system/MASTER.md. Now: [your instruction]."</p>
    </div>
  </div>

  <!-- ═══ 06 PHASE 1 ═══ -->
  <div class="section" id="phase1">
    <div class="sec-eyebrow">06 — Phase 1</div>
    <h2 class="sec-title">Homepage rebuild — clean build, no scroll animations yet</h2>

    <div class="callout ink"><p><strong>Opening message first:</strong> "Please read index.html and list the sections you can see. Do not change anything. Wait for my go." Then paste the prompt below. Work one section at a time.</p></div>

    <div class="prompt">
      <div class="prompt-label">Phase 1 — full homepage rebuild prompt</div>

      <span class="ps">Skill activation — always first</span>
      <p>Please read <em>design-system/MASTER.md</em>. If <em>design-system/pages/homepage.md</em> exists, prioritise its rules. Now build the following:</p>

      <span class="ps">Identity</span>
      <p>Andrea Lee. Product Designer and UX Researcher. Singapore. andrealee.co. Tagline: <strong>"I identify which problems are actually design problems. Then I design for what's real."</strong></p>
      <p>Background: 10+ years as Asst Manager Global Engagement, LASALLE College of the Arts (139 institutional agreements, 919% student mobility growth). Founded Magnolia & Pine luxury event design studio (Guerlain, CPF). Participated in The Good Hack civic tech hackathon — GoodHub SEA + Open Government Products (OGP). UX Design Immersive, General Assembly Singapore, 2026.</p>
      <p>Three case studies: ARVO (client-approved · Project Lead PM+UX · team of 6), Seletar Airport (self-initiated · Lead UX Researcher · team of 3), Paw Haus (self-initiated · Solo Product Designer).</p>

      <span class="ps">Design standard — 21st.dev + senior UX</span>
      <p><strong>Typography that does work:</strong> Headlines optically corrected at size (letter-spacing -1.5px above 48px). Line-length 45–75 characters per line. Generous line-height minimum 1.72 on body, 1.15 on display. DM Serif Display bold = editorial authority. Never decorative.</p>
      <p><strong>Spacing that breathes:</strong> Minimum 80px between sections on mobile. 120–160px on desktop. No cramped sections. The negative space earns as much as the content.</p>
      <p><strong>Colour that's decisive:</strong> Lime accent <em>#DEE895</em> appears max 4 times per page — nav logo, CTA button, one highlight, footer rule. Not more. Restraint signals confidence.</p>
      <p><strong>21st.dev card standard:</strong> Cards use border <em>1px solid rgba(33,40,26,0.08)</em> — not heavy box-shadows. Hover: translateY(-6px) + border opacity increases to rgba(33,40,26,0.16) + shadow <em>0 12px 40px rgba(33,40,26,0.12)</em>. Spring feel: transition all 0.25s cubic-bezier(0.22,1,0.36,1).</p>

      <span class="ps">Visual balance rules — every section</span>
      <p><strong>Rule 1:</strong> Max 2 sentences before a visual. <strong>Rule 2:</strong> Stats = visual blocks, never prose. <strong>Rule 3:</strong> Every design decision has an image. <strong>Rule 4:</strong> 45% text / 55% visual target per page. <strong>Rule 5:</strong> No UX jargon without plain-English translation inline.</p>

      <span class="ps">Colour system + dark / light mode</span>
      <p><strong>Light (default):</strong> bg <em>#F4F4EB</em>, text <em>#21281A</em>, cards <em>#EBEAE0</em>, lime <em>#DEE895</em>, borders <em>rgba(33,40,26,0.08)</em>, muted <em>#6B7060</em>.</p>
      <p><strong>Dark:</strong> bg <em>#1A1C16</em>, text <em>#F4F4EB</em>, cards <em>#252820</em>, same lime <em>#DEE895</em>, borders <em>rgba(244,244,235,0.08)</em>, muted <em>#8A9080</em>.</p>
      <p>Toggle in nav: ☀ / ☾ icon, min 44px tap target. localStorage preference. All colour transitions <em>0.3s cubic-bezier(0.22,1,0.36,1)</em>. Contrast check: minimum 4.5:1 on all body text in both modes.</p>

      <span class="ps">Section 1 — Hero</span>
      <p>Full typographic. No image. Dark bg section (same ink colour as nav). DM Serif Display bold <em>clamp(52px,7vw,80px)</em> letter-spacing -1.5px, max 45 chars per line: <strong>"I make complex things stupidly simple."</strong> Sub DM Sans 300 weight <em>clamp(16px,2vw,22px)</em>: <em>"Ten years navigating institutional complexity. Now building the same clarity into digital products."</em> Meta row DM Mono 10px uppercase letter-spacing 0.12em: <em>Product Designer · UX Researcher · Singapore · Open to opportunities.</em> CTA: outlined pill button with lime border, lime text: <strong>"See the work ↓"</strong> smooth scrolls to #work. Add <em>data-gsap="headline"</em> to headline, <em>data-gsap="reveal"</em> to section. No scroll animations Phase 1 — GSAP handles in Phase 2.</p>

      <span class="ps">Section 2 — Testimonial strip</span>
      <p>Full-width. Dark bg (<em>#21281A</em>). Lime left border 3px. Fraunces italic 300 <em>clamp(18px,2.2vw,26px)</em>: <strong>"Their design recommendations were methodically tested and immediately actionable, directly strengthening the product's user experience."</strong> DM Mono 11px attribution: <em>Eileen Zhang · Founder, ARVO · 2026.</em> <em>data-gsap="reveal"</em>.</p>

      <span class="ps">Section 3 — Work (id="work")</span>
      <p>ARVO: full-width card top. Seletar + Paw Haus: 2-col below (1-col below 768px). All cards: 21st.dev hover standard (translateY -6px, border opacity, shadow, 0.25s spring ease). Min 44px all interactive elements. <em>data-gsap="card"</em> on each, <em>data-gsap="stagger"</em> on container.</p>
      <p><strong>ARVO card:</strong> accent strip <em>#31332A</em>, bg <em>#F4EFE6</em>. DM Mono: <em>"ARVO · Client-approved · B2B SaaS · Project Lead · 2026".</em> Headline italic: <em>"Five of seven problems weren't ours to solve."</em> Sub: <em>"The client brought seven problems. We solved two. Here's why that was exactly right."</em></p>
      <p><strong>Seletar card:</strong> accent <em>#304C95</em>, bg <em>#F5F1E5</em>. DM Mono: <em>"Seletar Airport · Self-initiated · Lead UX Researcher · 2025–26".</em> Headline italic: <em>"Research told us we were wrong. So we started over."</em> Sub: <em>"Nobody was using the airport's website. They were using Reddit instead."</em></p>
      <p><strong>Paw Haus card:</strong> accent <em>#D09A94</em>, bg <em>#F7F6F4</em>. DM Mono: <em>"Paw Haus · Self-initiated · Solo Product Designer · 2025".</em> Headline italic: <em>"Pet owners don't shop. They check."</em> Sub: <em>"Every competitor organised by brand. We organised by the pet."</em></p>

      <span class="ps">Section 4 — Career context strip</span>
      <p>Dark bg. 3 equal columns (1-col below 900px). DM Mono eyebrow, DM Serif Display value. <strong>Col 1:</strong> "LASALLE College of the Arts" / "10 years · 139 agreements · 919% mobility growth." <strong>Col 2:</strong> "Magnolia & Pine" / "Luxury event design · Guerlain · CPF · 2020–2024." <strong>Col 3:</strong> "General Assembly Singapore" / "UX Design Immersive · 2026." <em>data-gsap="stagger"</em> container, <em>data-gsap="card"</em> each column.</p>

      <span class="ps">Section 5 — Hackathon</span>
      <p>Putty bg <em>#EBEAE0</em>. DM Mono label: "Recent highlight." DM Serif Display: <strong>"The Good Hack — Civic Tech."</strong> Body: <em>"Participated in The Good Hack, organised by GoodHub SEA and Open Government Products (OGP) Singapore — designing for systems that actually affect people."</em> Tag pills: "Civic Tech · GoodHub SEA · OGP · 2026." <em>data-gsap="reveal"</em>.</p>

      <span class="ps">Section 6 — About teaser</span>
      <p>Keep Pilates line: <em>"The invisible adjustments are usually the whole job."</em> Replace chaos marquee with scrolling marquee: <strong>"Research-led · Scope-decisive · Systems-minded · Outcome-obsessed"</strong> — same behaviour, same speed. Remove Serious/Unserious toggle entirely. "More about me →" links to about.html. Add <em>data-gsap="reveal"</em>.</p>

      <span class="ps">Section 7 — Outside my 9-5</span>
      <p>3 cards, 21st.dev hover. (1-col below 768px). <strong>Card 1:</strong> "Strong Pilates" — <em>"HIIT hybrid pilates. The invisible adjustments are usually the whole job."</em> <strong>Card 2:</strong> "Designing for elders" — <em>"Voice AI for Hokkien, Cantonese, Teochew speakers in Singapore — an underserved population in the age of AI assistants. Ask me → andreeyahlee@gmail.com"</em> <strong>Card 3:</strong> "Books, paint, .movs" — <em>"Fantasy novels, painting, and chasing interesting frames."</em> <em>data-gsap="stagger"</em> container.</p>

      <span class="ps">Section 8 — LinkedIn carousel</span>
      <p>DM Serif Display: <strong>"What I've been thinking about."</strong> Horizontal carousel: arrows (min 44px), dots, touch-swipe, smooth scroll. Iframe placeholders class <em>"linkedin-embed"</em> — embed codes added separately. <em>data-gsap="reveal"</em>.</p>

      <span class="ps">Contact footer — all pages</span>
      <p>Dark bg. DM Serif Display <em>clamp(28px,4vw,42px)</em>: <strong>"Let's work together."</strong> Body: <em>"Open to UX research, product strategy, customer success, and partnerships roles in Singapore. If you're building something complex that needs to feel simple — let's talk."</em> Outlined buttons min 44px: <em>andreeyahlee@gmail.com · LinkedIn → · Resume →.</em> Footer: <em>"Andrea Lee · Singapore · 2026 · Built from scratch."</em></p>

      <span class="ps">Typography system</span>
      <p>DM Serif Display: all headlines. DM Sans: all body 15px/1.78. DM Mono: labels/tags/captions 10px uppercase 0.12em. Hero: <em>clamp(52px,7vw,80px)</em> -1.5px. Sections: <em>clamp(26px,4vw,42px)</em>. Card headlines: italic. Min 15px body. No text under 12px. 45–75 chars per line. Line-height minimum 1.6.</p>

      <span class="ps">Phase 1 animations — CSS only, no GSAP</span>
      <p>CSS hover transitions: cards use 21st.dev spring curve <em>cubic-bezier(0.22,1,0.36,1)</em> 0.25s. Dark/light toggle: 0.3s <em>cubic-bezier(0.22,1,0.36,1)</em> on all colour properties. NO scroll animations — GSAP owns all scroll reveals in Phase 2. Add data attributes to all elements for Phase 2 targeting: <em>data-gsap="headline"</em> all display headings, <em>data-gsap="reveal"</em> all sections, <em>data-gsap="card"</em> all cards, <em>data-gsap="stagger"</em> all grid containers.</p>

      <span class="ps">Accessibility — skill Priority 1</span>
      <p>All images: descriptive alt text. All interactive: visible :focus-visible ring (2px, 2px offset, lime colour). All tap targets: min 44×44px. h1→h2→h3 sequential. aria-expanded on hamburger. aria-label on icon-only buttons. Tab order matches visual order.</p>

      <span class="ps">Performance — skill Priority 3</span>
      <p>All non-hero images: loading="lazy". width + height attributes on all img (prevents CLS). WebP format. font-display: swap. max-width containers with padding — no fixed px widths.</p>

      <span class="ps">Mobile — skill Priority 5</span>
      <p>Mobile-first. Breakpoints 375 / 640 / 768 / 1280px. Zero horizontal scroll. Hamburger below 640px. All sizes via clamp(). Touch-swipe carousel. Min 44px all targets. iPhone Safari first.</p>

      <span class="ps">Keep / Remove</span>
      <p><strong>Keep:</strong> Custom cursor (cursor-light.png). GSAP work-reveal in #work. Case study HTML links. "Built from scratch" footer. All existing CSS variables. <strong>Remove:</strong> "welcome to my chaos!" marquee text. Serious/Unserious toggle (all HTML, CSS, JS). Generic hero image. Any inline animation JS that conflicts with Phase 2 GSAP.</p>
    </div>
  </div>

  <!-- ═══ 07 PHASE 2 ═══ -->
  <div class="section" id="phase2">
    <div class="sec-eyebrow">07 — Phase 2</div>
    <h2 class="sec-title">Studio Namma GSAP + Framer Motion spring physics — after Phase 1 is live</h2>

    <div class="callout red"><strong>Only start Phase 2 after Phase 1 is pushed to GitHub and confirmed live at andrealee.co.</strong> Phase 2 adds a script block only — zero HTML or CSS changes.</div>

    <div class="callout warn"><strong>Framer Motion → GSAP spring translation:</strong> Framer Motion's default spring (stiffness 100, damping 15) translates to GSAP CustomEase: <code style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.08);padding:1px 5px;border-radius:3px;font-size:11px;">cubic-bezier(0.22, 1, 0.36, 1)</code> — this is the same curve used in 21st.dev components and Apple iOS spring animations. Every GSAP animation in Phase 2 uses this easing unless specified otherwise.</div>

    <div class="prompt">
      <div class="prompt-label">Phase 2 — Studio Namma GSAP prompt</div>

      <p>My portfolio homepage is built with <em>data-gsap</em> attributes on all key elements. Add Studio Namma-level GSAP animations in a single script block. Do not touch HTML or CSS. Show me the complete script block before applying.</p>

      <span class="ps">CDN links — add to &lt;head&gt;</span>
      <span class="cmd">https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js</span>
      <span class="cmd">https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js</span>
      <span class="cmd">https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js</span>
      <span class="cmd">https://cdn.jsdelivr.net/npm/split-type@0.3.4/umd/index.min.js</span>

      <span class="ps">The Framer Motion spring curve — use throughout</span>
      <p>Register this as the default ease for all animations: <em>cubic-bezier(0.22, 1, 0.36, 1)</em> — this is the Framer Motion spring(stiffness:100, damping:15) translated to GSAP. Every reveal, every card entrance, every text stagger uses this curve unless specified otherwise.</p>

      <span class="ps">Pattern 1 — Lenis smooth scroll (Studio Namma's signature feel)</span>
      <p>Initialise Lenis with lerp: 0.08, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)). Connect to GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000)). Set gsap.ticker.lagSmoothing(0). This gives the buttery scroll inertia — 80% of the Studio Namma feel comes from this alone.</p>

      <span class="ps">Pattern 2 — Custom cursor with GSAP lerp (Studio Namma cursor)</span>
      <p>Create a custom cursor dot (8px, lime #DEE895) and a cursor follower ring (32px, outline). The dot follows cursor position instantly. The follower ring lerps behind with gsap.to x and y at speed 0.15. On hover over cards or links, scale the ring to 1.6 with the spring ease. On click, scale dot to 0.6 briefly. Hide default cursor via CSS cursor: none on body. Show cursor on interactive elements with cursor: none (GSAP handles the visual). This is a direct translation of Studio Namma's cursor behaviour.</p>

      <span class="ps">Pattern 3 — Headline word reveals with SplitType</span>
      <p>Select all [data-gsap="headline"]. Apply SplitType({types: "words, lines"}). For each element: gsap.from(words, {opacity: 0, y: 44, rotateX: -20, stagger: 0.04, duration: 0.9, ease: "cubic-bezier(0.22,1,0.36,1)", scrollTrigger: {trigger: element, start: "top 88%", once: true}}). Words arrive from below with a slight 3D rotation — this is the Studio Namma text reveal.</p>

      <span class="ps">Pattern 4 — Clip-path image reveals (Studio Namma image entrance)</span>
      <p>Select all img elements with loading="lazy". For each: gsap.from(img, {clipPath: "inset(100% 0 0 0)", duration: 1.0, ease: "cubic-bezier(0.22,1,0.36,1)", scrollTrigger: {trigger: img, start: "top 85%", once: true}}). Images wipe in from bottom — the image reveal pattern Studio Namma uses throughout.</p>

      <span class="ps">Pattern 5 — Section reveals</span>
      <p>All [data-gsap="reveal"]: gsap.from(element, {opacity: 0, y: 32, duration: 0.75, ease: "cubic-bezier(0.22,1,0.36,1)", scrollTrigger: {trigger: element, start: "top 82%", once: true}}).</p>

      <span class="ps">Pattern 6 — Card stagger reveals</span>
      <p>All [data-gsap="stagger"] containers: select child [data-gsap="card"] elements. gsap.from(cards, {opacity: 0, y: 28, scale: 0.96, stagger: 0.1, duration: 0.65, ease: "cubic-bezier(0.22,1,0.36,1)", scrollTrigger: {trigger: container, start: "top 78%", once: true}}).</p>

      <span class="ps">Pattern 7 — Marquee scroll direction response</span>
      <p>The "Research-led · Scope-decisive..." marquee should reverse direction when user scrolls up. Listen to Lenis scroll event: if direction === -1, reverse the marquee CSS animation (animation-direction: reverse). If direction === 1, forward. This is the Studio Namma marquee behaviour.</p>

      <span class="ps">Reduced motion — non-negotiable</span>
      <p>At top of script: if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { — skip ALL GSAP animation setup. Set all [data-gsap] elements to opacity:1. Keep Lenis smooth scroll (it doesn't add motion, it smooths it). Return early. }</p>

      <p>Show complete script block. Do not apply until I confirm.</p>
    </div>
  </div>

  <!-- ═══ 08 CASE STUDIES ═══ -->
  <div class="section" id="casestudies">
    <div class="sec-eyebrow">08 — Case study prompts</div>
    <h2 class="sec-title">Build all three case studies from the narrative arcs in Section 02</h2>

    <div class="callout warn"><strong>New Claude Code session per case study.</strong> Assets must be ready before starting. Skill prefix required: "Please read design-system/MASTER.md. Now:" before each prompt.</div>

    <div class="prompt">
      <div class="prompt-label">ARVO case study build prompt</div>
      <p>Please read <em>design-system/MASTER.md</em>. Rebuild arvo-case-study.html following these exact rules:</p>
      <p><strong>Writing rules:</strong> Max 2 sentences before each visual. No UX jargon — translate every term inline. Max 350 words total prose. Stat blocks are visual elements, not text. Lead every section with the most interesting thing that happened.</p>
      <p><strong>Narrative arc (from the PRD):</strong> Hook: <em>"A startup hired us to fix seven problems. We fixed two. Here's why that was exactly right."</em> → Act 1: 83% rejected original (show dashboard screenshot A1). → Act 2: The 7-problem decision (show problem map visual). → Act 3: Traffic light + label rewrite (show A3, A4 side by side). → Act 4: Outcome 93% + Eileen quote (show A5). → Coda: one reflection sentence.</p>
      <p><strong>Images:</strong> A1 after problem opening paragraph. A2 (workshop photo) in research section. A3 immediately after Cognitive Overload decision card. A4 immediately after Jargon decision card. A5 at top of outcomes. Alt text required on all. loading="lazy". width + height attributes.</p>
      <p><strong>Stats as visual blocks:</strong> 83% · 93% · 12 interviews · 13 testers · 2 of 7 — all in large visual stat components, never in paragraphs.</p>
      <p><strong>Add Eileen testimonial to Outcomes:</strong> Full quote. DM Serif Display italic pull quote format. Attribution: Eileen Zhang · Founder, ARVO · 2026.</p>
      <p><strong>Retain:</strong> Dark/light mode toggle. data-gsap attributes on all headlines and sections. Footer. Case study colour system (warm olive). Contact footer.</p>
      <p><strong>Name:</strong> Andrea Lee throughout. Not Andrea Lee En Rui.</p>
    </div>

    <div class="prompt">
      <div class="prompt-label">Seletar case study build prompt</div>
      <p>Please read <em>design-system/MASTER.md</em>. Rebuild seletar-case-study.html:</p>
      <p><strong>Role — make explicit:</strong> First section must clearly state: Lead UX Researcher. Team: MAD Design — Melody (PM) · Andrea Lee (Research) · Danna (Visual Design). "I led research. Every user interview, the testing framework, the call to kill V1."</p>
      <p><strong>Narrative arc:</strong> Hook: <em>"Nobody was using the airport's website. They were using Reddit instead."</em> → Act 1: 9/9 chose Seletar for speed (show S1 original site). → Act 2: The 3.0 failure — V1 cut (show S3, prominent). → Act 3: Speed-first pivot + label change (show S4). → Act 4: 4.8/5 + "Brilliant" quote (show S5). → Coda: "Good research doesn't validate what you built. It tells you what you should have been building."</p>
      <p><strong>Images:</strong> S1 after problem opening. S2 in research section. S3 in constraints — prominent, with "V1 · 3.0/5 · We cut it" caption. S4 in decisions section immediately. S5 at top of outcomes. All design screen captions: "Visual design by Danna, informed by my research direction."</p>
      <p><strong>Same rules:</strong> Max 350 words prose. Max 2 sentences before each visual. Stats visual blocks. No banned phrases. Andrea Lee throughout.</p>
    </div>

    <div class="prompt">
      <div class="prompt-label">Paw Haus case study build prompt</div>
      <p>Please read <em>design-system/MASTER.md</em>. Rebuild pethaus-case-study.html:</p>
      <p><strong>Role:</strong> Solo Product Designer. Self-initiated. End to end — research, IA, visual design, testing. Make this explicit at the top.</p>
      <p><strong>Narrative arc:</strong> Hook: <em>"Every pet supply website is a wall of products. We built one that knows your pet before you search."</em> → Act 1: 12 owners described anxiety, not shopping (show P1 competitor + P2 card sort). → Act 2: Organised by pet, not brand (show P4 onboarding flow). → Act 3: Warning tag vs match indicator (show P3 — the argument lives in the image, max 2 sentences of text). → Act 4: 100% found safe food + 4.8/5 (show P5). → Coda: "If I couldn't find it in the research, I didn't build it."</p>
      <p><strong>Same rules:</strong> Max 350 words prose. Visual-first. Stats as blocks. No UX jargon. Andrea Lee throughout.</p>
    </div>
  </div>

  <!-- ═══ 09 ABOUT PAGE ═══ -->
  <div class="section" id="about">
    <div class="sec-eyebrow">09 — About page</div>
    <h2 class="sec-title">About page prompt — separate Claude Code session</h2>

    <div class="prompt">
      <div class="prompt-label">About page prompt</div>
      <p>Please read <em>design-system/MASTER.md</em>, then read about.html. Rebuild with this content. Keep fonts, colours, CSS variables. Andrea Lee throughout.</p>
      <p><strong>Headline:</strong> <em>"I turn complex systems into experiences people can actually use."</em> Sub: <em>Product Designer & UX Researcher · Singapore</em></p>
      <p><strong>Opening (plain English — write like telling a smart friend):</strong> <em>I spent a decade at LASALLE College of the Arts managing international university partnerships. MOUs, stakeholder delegations, negotiations across Singapore, Europe, and Asia. Alongside that, I ran Magnolia & Pine — a luxury event design studio. Clients like Guerlain and CPF. Both contexts taught me the same thing: complexity doesn't disappear. You either move it onto the user, or you absorb it into the design. In 2026 I completed the UX Design Immersive at General Assembly Singapore. Not a career change. A language upgrade.</em></p>
      <p><strong>Philosophy block (dark bg):</strong> Title: <em>"Making complex things stupidly simple."</em> Body: <em>"The complexity moves. From the manager's overwhelming dashboard to a traffic-light dial. From the pet owner's ingredient checklist to a personalised feed. From the airport's brochure site to a two-click commuter tool. That's the work."</em></p>
      <p><strong>Side project section:</strong> Title: <em>"What I'm building when no one's asked me to."</em> Body: <em>"Designing voice AI for elderly dialect speakers in Singapore — Hokkien, Cantonese, Teochew. Voice assistants only understand Mandarin and English. That leaves out an entire generation. This isn't a side project. It's where the most important design problems are."</em> CTA: <em>"Ask me about it → andreeyahlee@gmail.com"</em></p>
      <p><strong>Full testimonial pull quote:</strong> <em>"Working with this UX/UI student team was a genuinely impressive experience. Their design recommendations were methodically tested and immediately actionable, directly strengthening the product's user experience."</em> — Eileen Zhang · Founder, ARVO · 2026.</p>
      <p><strong>Credentials:</strong> UX Design Immersive · General Assembly Singapore · 2026 / BSc (Hons) Management · University of London / LSE · 2008–2011 / Asst Manager, Global Engagement · LASALLE College of the Arts · Nov 2017–present / Founder · Magnolia & Pine · Dec 2020–Dec 2024 / Senior Executive · PSB Academy · Apr 2014–Oct 2017.</p>
      <p><strong>Skills pills:</strong> Problem Scoping · Stakeholder Management · User Research · Usability Testing · Information Architecture · Wireframing · Prototyping · Design Systems · Figma Suite · Agile.</p>
      <p>Add <em>data-gsap</em> attributes to all headlines and sections. Phase 2 GSAP prompt applies to about.html after it's confirmed on homepage.</p>
    </div>
  </div>

  <!-- ═══ 10 ORDER OF OPERATIONS ═══ -->
  <div class="section" id="order">
    <div class="sec-eyebrow">10 — Order of operations</div>
    <h2 class="sec-title">The sequence — do not skip ahead</h2>

    <div class="steps">
      <div class="step-item"><div class="step-num sn-r">1</div><div class="step-text"><strong>Screenshot S1 + P1 right now</strong><span>seletarairport.com.sg and Shopee pet food section. 4 minutes total. Unblocks two case studies.</span></div></div>
      <div class="step-item"><div class="step-num sn-r">2</div><div class="step-text"><strong>Open Figma — export all 13 remaining images (A1–A5, S2–S5, P2–P5)</strong><span>2x PNG → convert to WebP using the batch terminal command. Save to assets/images/.</span></div></div>
      <div class="step-item"><div class="step-num sn-g">3</div><div class="step-text"><strong>Install ui-ux-pro-max-skill once</strong><span>npm install -g uipro-cli → uipro init --ai claude</span></div></div>
      <div class="step-item"><div class="step-num sn-b">4</div><div class="step-text"><strong>Claude Code — Phase 1 homepage build</strong><span>Read index.html → paste Phase 1 prompt → one section at a time → check Live Server after each.</span></div></div>
      <div class="step-item"><div class="step-num sn-b">5</div><div class="step-text"><strong>Push Phase 1 to GitHub</strong><span>"Portfolio v2 Phase 1 — homepage rebuild" → Commit → Push → confirm live at andrealee.co.</span></div></div>
      <div class="step-item"><div class="step-num sn-b">6</div><div class="step-text"><strong>Claude Code — Phase 2 GSAP</strong><span>New session. Paste Phase 2 prompt. Review script block before applying. Test reduced motion.</span></div></div>
      <div class="step-item"><div class="step-num sn-b">7</div><div class="step-text"><strong>Push Phase 2 to GitHub</strong><span>"Phase 2 — GSAP animations + Lenis + cursor" → Push → test on iPhone Safari.</span></div></div>
      <div class="step-item"><div class="step-num sn-gn">8</div><div class="step-text"><strong>Claude Code — rebuild all 3 case studies</strong><span>One session per case study. ARVO first (zero images currently). Use prompts from Section 08.</span></div></div>
      <div class="step-item"><div class="step-num sn-gn">9</div><div class="step-text"><strong>Claude Code — About page</strong><span>New session. Paste About prompt from Section 09. Push.</span></div></div>
      <div class="step-item"><div class="step-num sn-gn">10</div><div class="step-text"><strong>LinkedIn embed codes → carousel</strong><span>LinkedIn: ··· → Embed post → copy iframe × 4–6 posts. Claude Code replaces placeholders. Push.</span></div></div>
      <div class="step-item"><div class="step-num sn-gn">11</div><div class="step-text"><strong>Final check</strong><span>Desktop + iPhone Safari. Both modes. All links. Prototype buttons open without Figma login. Zero horizontal scroll. Cursor animation works. Lenis scroll feels smooth. Done.</span></div></div>
    </div>

    <div class="callout ink"><p><strong>The one thing that unlocks everything:</strong> Steps 1 and 2. All the code work (Steps 4–11) is independent and fast once the images exist. The images are the only real blocker. Take those two screenshots right now.</p></div>
  </div>

  <div style="border-top:1px solid var(--rule);padding-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:20px;font-size:11px;color:var(--mid);font-family:'DM Mono',monospace;margin-top:40px;">
    <div>Master PRD v2 · andrealee.co · May 2026 · Final</div>
    <div style="text-align:right;">Simon Pan standard · Studio Namma GSAP · Framer spring · 21st.dev · Andrea Lee</div>
  </div>

</div>
</body>
</html>
