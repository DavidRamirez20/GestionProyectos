import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx: any) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html>
            <Head>
               {/* <script src="https://kit.fontawesome.com/6396d12f7f.js" crossOrigin="anonymous"></script> */}
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument