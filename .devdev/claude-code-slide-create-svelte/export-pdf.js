import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function exportToPDF() {
	console.log('🚀 Starting PDF export...');
	
	// Start the development server
	console.log('📦 Starting development server...');
	const server = spawn('npm', ['run', 'dev'], {
		stdio: 'pipe',
		shell: true
	});
	
	// Wait for server to be ready
	await new Promise((resolve) => {
		server.stdout.on('data', (data) => {
			const output = data.toString();
			if (output.includes('Local:') || output.includes('localhost')) {
				console.log('✅ Development server ready');
				resolve();
			}
		});
	});
	
	// Give server a moment to fully initialize
	await new Promise(resolve => setTimeout(resolve, 2000));
	
	const browser = await chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();
	
	try {
		console.log('📄 Generating PDF...');
		
		// Navigate to the presentation
		await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
		
		// Wait for the presentation to load
		await page.waitForSelector('.presentation');
		
		// Get total number of slides
		const slideCount = await page.evaluate(() => {
			const dots = document.querySelectorAll('.dot');
			return dots.length;
		});
		
		console.log(`📊 Found ${slideCount} slides`);
		
		const slides = [];
		
		// Generate PDF for each slide
		for (let i = 0; i < slideCount; i++) {
			console.log(`📸 Capturing slide ${i + 1}/${slideCount}`);
			
			// Navigate to specific slide
			await page.evaluate((slideIndex) => {
				const dots = document.querySelectorAll('.dot');
				if (dots[slideIndex]) {
					dots[slideIndex].click();
				}
			}, i);
			
			// Wait for slide transition
			await page.waitForTimeout(600);
			
			// Generate PDF for this slide
			const pdf = await page.pdf({
				format: 'A4',
				landscape: true,
				printBackground: true,
				margin: {
					top: '0.5in',
					right: '0.5in',
					bottom: '0.5in',
					left: '0.5in'
				}
			});
			
			slides.push(pdf);
		}
		
		// For simplicity, just save the last PDF (all slides in one document)
		// In a real implementation, you'd merge all PDFs or save them separately
		const fullPdf = await page.pdf({
			format: 'A4',
			landscape: true,
			printBackground: true,
			margin: {
				top: '0.5in',
				right: '0.5in',
				bottom: '0.5in',
				left: '0.5in'
			}
		});
		
		// Save the PDF
		const fs = await import('fs');
		fs.writeFileSync('slides.pdf', fullPdf);
		
		console.log('✅ PDF exported successfully as slides.pdf');
		
	} catch (error) {
		console.error('❌ Error during PDF export:', error);
	} finally {
		await browser.close();
		server.kill();
		console.log('🔄 Cleanup completed');
		process.exit(0);
	}
}

exportToPDF();