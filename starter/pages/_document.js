import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					{/* Google Tag Manager */}
					<script dangerouslySetInnerHTML={{ __html: `window.load(function (){ console.log("hello world"); });` }} />
					{/* End Google Tag Manager */}
				</Head>
				<body>
					{/* Google Tag Manager (noscript) */}
					<noscript dangerouslySetInnerHTML={{ __html: `` }} />
					{/* End Google Tag Manager (noscript) */}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
