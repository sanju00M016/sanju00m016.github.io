import { resumeData } from "@/data/resume";

export function openResumeForDownload() {
    const html = buildResumeHTML();
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, "_blank");
    if (win) {
        win.onload = () => setTimeout(() => win.print(), 400);
    }
}

function buildResumeHTML(): string {
    const d = resumeData;

    const experienceHTML = d.experience
        .map(function (exp) {
            const bulletsHtml =
                exp.bullets.length > 0
                    ? '<ul class="bullets">' +
                    exp.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") +
                    "</ul>"
                    : "";
            return [
                '<div class="exp-block">',
                '<div class="exp-header">',
                "<div>",
                '<h3 class="exp-role">' + exp.role + "</h3>",
                '<p class="exp-company">' + exp.company + "</p>",
                "</div>",
                '<div class="exp-meta">',
                "<span>" + exp.dates + "</span>",
                "<span>" + exp.location + "</span>",
                "</div>",
                "</div>",
                bulletsHtml,
                "</div>",
            ].join("\n");
        })
        .join("\n");

    const educationHTML = d.education
        .map(function (edu) {
            const noteHtml = edu.notes
                ? '<p class="edu-note">\u{1F3C6} ' + edu.notes + "</p>"
                : "";
            return [
                '<div class="edu-block">',
                '<div class="edu-header">',
                "<div>",
                '<h3 class="edu-degree">' + edu.degree + " &mdash; " + edu.field + "</h3>",
                '<p class="edu-inst">' + edu.institution + "</p>",
                noteHtml,
                "</div>",
                '<span class="edu-dates">' + edu.dates + "</span>",
                "</div>",
                "</div>",
            ].join("\n");
        })
        .join("\n");

    const skillsHTML = d.skills
        .map(function (group) {
            const tags = group.items
                .map(function (s) { return '<span class="skill-tag">' + s + "</span>"; })
                .join("");
            return [
                '<div class="skill-group">',
                '<h4 class="skill-group-title">' + group.group + "</h4>",
                '<div class="skill-tags">' + tags + "</div>",
                "</div>",
            ].join("\n");
        })
        .join("\n");

    const achievementsHTML = d.achievements
        .map(function (a) {
            return "<li><strong>" + a.item + "</strong> &mdash; " + a.context + "</li>";
        })
        .join("\n");

    const certsHTML = d.certifications
        .map(function (c) {
            const code = "code" in c && c.code ? " (" + c.code + ")" : "";
            return "<li>" + c.name + code + " &mdash; " + c.issuer + "</li>";
        })
        .join("\n");

    const projectsHTML = d.projects
        .map(function (p) {
            const bulletsHtml = p.bullets
                .map(function (b) { return "<li>" + b + "</li>"; })
                .join("");
            return [
                '<div class="proj-block">',
                '<h3 class="proj-title">' + p.title + "</h3>",
                '<p class="proj-context">' + p.context + "</p>",
                '<p class="proj-stack">Tech: ' + p.stack.join(" &middot; ") + "</p>",
                '<ul class="bullets">' + bulletsHtml + "</ul>",
                "</div>",
            ].join("\n");
        })
        .join("\n");

    const projectsSection =
        d.projects.length > 0
            ? [
                '<div class="section">',
                '<h2 class="section-title">Projects</h2>',
                projectsHTML,
                "</div>",
            ].join("\n")
            : "";

    const css = [
        "<style>",
        "  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');",
        "  * { margin: 0; padding: 0; box-sizing: border-box; }",
        "  body { font-family: 'Outfit', sans-serif; color: #1a1a2e; background: #fff; line-height: 1.6; font-size: 10.5pt; }",
        "  .page { max-width: 820px; margin: 0 auto; padding: 40px 48px; }",
        "  .header { border-bottom: 2.5px solid #00E5A0; padding-bottom: 16px; margin-bottom: 22px; }",
        "  .header h1 { font-size: 26pt; font-weight: 700; color: #0A0F1C; letter-spacing: -0.5px; margin-bottom: 2px; }",
        "  .header .title { font-size: 10pt; color: #00967A; font-weight: 600; margin-bottom: 8px; }",
        "  .contact-row { display: flex; flex-wrap: wrap; gap: 14px; font-size: 9pt; color: #475569; }",
        "  .contact-row a { color: #00967A; text-decoration: none; }",
        "  .open-to { margin-top: 8px; font-size: 9pt; font-style: italic; color: #64748b; }",
        "  .section { margin-bottom: 18px; }",
        "  .section-title { font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; font-weight: 700; color: #0A0F1C; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 10px; }",
        "  .summary { font-size: 9.5pt; color: #334155; line-height: 1.6; white-space: pre-line; }",
        "  .exp-block { margin-bottom: 14px; }",
        "  .exp-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }",
        "  .exp-role { font-size: 11pt; font-weight: 600; color: #0A0F1C; }",
        "  .exp-company { font-size: 10pt; color: #00967A; font-weight: 500; }",
        "  .exp-meta { text-align: right; font-size: 8.5pt; color: #64748b; flex-shrink: 0; }",
        "  .exp-meta span { display: block; }",
        "  .bullets { margin-top: 4px; padding-left: 16px; }",
        "  .bullets li { font-size: 9pt; color: #334155; margin-bottom: 3px; line-height: 1.5; }",
        "  .edu-block { margin-bottom: 10px; }",
        "  .edu-header { display: flex; justify-content: space-between; align-items: flex-start; }",
        "  .edu-degree { font-size: 10.5pt; font-weight: 600; color: #0A0F1C; }",
        "  .edu-inst { font-size: 9pt; color: #475569; }",
        "  .edu-dates { font-size: 8.5pt; color: #64748b; flex-shrink: 0; }",
        "  .edu-note { font-size: 8.5pt; color: #b45309; margin-top: 2px; }",
        "  .skill-group { margin-bottom: 8px; }",
        "  .skill-group-title { font-size: 9pt; font-weight: 600; color: #0A0F1C; margin-bottom: 4px; }",
        "  .skill-tags { display: flex; flex-wrap: wrap; gap: 4px; }",
        "  .skill-tag { display: inline-block; padding: 2px 8px; border-radius: 4px; background: #f0fdf4; color: #00967A; font-size: 8pt; font-weight: 500; border: 1px solid #bbf7d0; }",
        "  .proj-block { margin-bottom: 12px; }",
        "  .proj-title { font-size: 10.5pt; font-weight: 600; color: #0A0F1C; }",
        "  .proj-context { font-size: 9pt; color: #00967A; font-weight: 500; margin-bottom: 3px; }",
        "  .proj-stack { font-size: 8.5pt; color: #475569; margin-bottom: 4px; }",
        "  .compact-list { padding-left: 16px; }",
        "  .compact-list li { font-size: 9pt; color: #334155; margin-bottom: 4px; line-height: 1.45; }",
        "  @media print {",
        "    body { font-size: 9.5pt; }",
        "    .page { padding: 20px 28px; max-width: 100%; }",
        "    .section { break-inside: avoid; }",
        "    .exp-block { break-inside: avoid; }",
        "    @page { margin: 0.4in; size: A4; }",
        "    .no-print { display: none !important; }",
        "  }",
        "  .download-bar { position: fixed; top: 0; left: 0; right: 0; background: #0A0F1C; color: #fff; padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; z-index: 100; font-family: 'Outfit', sans-serif; }",
        "  .download-bar p { font-size: 13px; opacity: 0.8; }",
        "  .download-bar button { background: #00E5A0; color: #0A0F1C; border: none; padding: 8px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; cursor: pointer; font-family: 'Outfit', sans-serif; }",
        "  .download-bar button:hover { background: #00cc8e; }",
        "  .page-with-bar { margin-top: 56px; }",
        "</style>",
    ].join("\n");

    const parts = [
        "<!DOCTYPE html>",
        '<html lang="en">',
        "<head>",
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        "  <title>" + d.basics.name + " - Resume</title>",
        css,
        "</head>",
        "<body>",
        '  <div class="download-bar no-print">',
        "    <p>Use <strong>Ctrl+P</strong> (or Cmd+P on Mac) &rarr; <strong>Save as PDF</strong></p>",
        '    <button onclick="window.print()">Save as PDF</button>',
        "  </div>",
        '  <div class="page page-with-bar">',
        '    <div class="header">',
        "      <h1>" + d.basics.name + "</h1>",
        '      <p class="title">' + d.basics.title + "</p>",
        '      <div class="contact-row">',
        '        <span>&#x2709; <a href="mailto:' + d.basics.email + '">' + d.basics.email + "</a></span>",
        "        <span>&#x260E; " + d.basics.phone + "</span>",
        "        <span>&#x1F4CD; " + d.basics.location + "</span>",
        '        <span>&#x1F517; <a href="' + d.basics.links.linkedin + '" target="_blank">linkedin.com/in/sanju-m</a></span>',
        "      </div>",
        '      <p class="open-to">' + d.basics.open_to + "</p>",
        "    </div>",
        '    <div class="section">',
        '      <h2 class="section-title">Summary</h2>',
        '      <p class="summary">' + d.basics.summary.replace(/\n/g, "<br/>") + "</p>",
        "    </div>",
        '    <div class="section">',
        '      <h2 class="section-title">Experience</h2>',
        experienceHTML,
        "    </div>",
        projectsSection,
        '    <div class="section">',
        '      <h2 class="section-title">Education</h2>',
        educationHTML,
        "    </div>",
        '    <div class="section">',
        '      <h2 class="section-title">Skills</h2>',
        skillsHTML,
        "    </div>",
        '    <div class="section">',
        '      <h2 class="section-title">Key Achievements</h2>',
        '      <ul class="compact-list">' + achievementsHTML + "</ul>",
        "    </div>",
        '    <div class="section">',
        '      <h2 class="section-title">Certifications</h2>',
        '      <ul class="compact-list">' + certsHTML + "</ul>",
        "    </div>",
        "  </div>",
        "</body>",
        "</html>",
    ];

    return parts.join("\n");
}