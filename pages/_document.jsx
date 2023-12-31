import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <base href={ process.env.PUBLIC_URL } />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CPoppins:200,300,400,500,600,700%7CPlayfairDisplay:400,500,400italic,700" />
                    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="css/fonts-molla.min.css" />
                    <link rel="stylesheet" type="text/css" href="vendor/line-awesome/css/line-awesome.min.css" />
                </Head>
                <body>
                    <Main />
                    <script src="js/jquery.min.js"></script>
                    <NextScript />
                </body>
            </Html>
        )
    }
}