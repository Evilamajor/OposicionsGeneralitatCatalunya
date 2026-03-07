import { rewriteHtmlAssetUrls } from './rewriteHtmlAssetUrls';

describe('rewriteHtmlAssetUrls', () => {
  it('rewrites root-relative and relative asset URLs to include the Vite base path', () => {
    const html = `
      <html>
        <body>
          <img src="/content/demo/image.png" alt="Demo" />
          <a href="../docs/file.pdf">PDF</a>
        </body>
      </html>
    `;

    const rewritten = rewriteHtmlAssetUrls(
      html,
      `${import.meta.env.BASE_URL}content/demo/tema/materials.html`,
      { bodyOnly: true },
    );

    expect(rewritten).toContain(`src="${import.meta.env.BASE_URL}content/demo/image.png"`);
    expect(rewritten).toContain(`href="${import.meta.env.BASE_URL}content/demo/docs/file.pdf"`);
    expect(rewritten).not.toContain('href="../docs/file.pdf"');
  });
});
