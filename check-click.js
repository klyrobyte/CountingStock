import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/login', { waitUntil: 'networkidle2' });

  const btn = await page.$('#btn-ayo-masuk');
  if (btn) {
    const isIntersecting = await btn.isIntersectingViewport();
    const box = await btn.boundingBox();
    console.log('Button found!', { isIntersecting, box });
    
    // get element at center of button
    const elementAtPoint = await page.evaluate((x, y) => {
        const el = document.elementFromPoint(x, y);
        return el ? { tagName: el.tagName, id: el.id, className: el.className } : null;
    }, box.x + box.width / 2, box.y + box.height / 2);
    
    console.log('Element at point:', elementAtPoint);
    
    // Click the button
    try {
        await btn.click();
        console.log('Clicked successfully!');
    } catch(err) {
        console.error('Click failed:', err.message);
    }
  } else {
    console.log('Button not found!');
  }

  await browser.close();
})();
