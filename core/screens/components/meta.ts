import { Request } from "express";
import { IDynamicPageSpecifications } from "./types";
import { Configs } from "../../configs";
const { encode } = require("urlencode");

export const meta = (
  req: Request,
  dynamicPageSpecifications: IDynamicPageSpecifications
) => {
  const canonicalUrl = req.originalUrl;
  const pageUrl = req.originalUrl;
  const { pageTitle, pageDescription, pageCSS, themeColor, previewImageUrl } =
    dynamicPageSpecifications;
  let ogImage = `${Configs.website.openGraphTemplateUrl}/${encode(
    Configs.project.description
  )}/${encode(pageTitle)}/${encode(Configs.website.logo)}/og.png`;

  return `<meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>
                ${pageTitle}
            </title>
            <link rel="icon" href="${
              Configs.website.favicon
            }" sizes="16x16 32x32 48x48">
            <link rel="canonical" href="${Configs.project.url.deployment}${
    canonicalUrl ? canonicalUrl : "/"
  }">
            <meta name="description" content="${
              pageDescription ? pageDescription : Configs.project.description
            }">
            <meta name="robots" content="index, follow">
            
            <!-- Facebook Meta Tags -->
            <meta property="og:title" content="${
              pageTitle ? pageTitle : Configs.project.name
            }">
            <meta property="og:description" content="${
              pageDescription ? pageDescription : Configs.project.description
            }">

            <meta property="og:image" content="${
              previewImageUrl ? previewImageUrl : ogImage
            }">

            <meta property="og:url" content="${pageUrl}">
            <meta property="og:type" content="website">


            <!-- Twitter Meta Tags -->
            <meta name="twitter:card" content="summary_large_image">
            <meta property="twitter:domain" content="${
              Configs.project.url.deployment
            }">
            <meta property="twitter:url" content="${pageUrl}">
            <meta name="twitter:title" content="${
              pageTitle ? pageTitle : Configs.project.name
            }">
            <meta name="twitter:description" content="${
              pageDescription ? pageDescription : Configs.project.description
            }">
            <meta name="twitter:image" content="${
              previewImageUrl ? previewImageUrl : ogImage
            }">


            <meta name="theme-color" content="${
              themeColor ? themeColor : Configs.website.themeing.primaryColor
            }" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
            <script src="https://kit.fontawesome.com/63483fd584.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastify-js/1.12.0/toastify.css"/>
            <link rel="stylesheet" href="${pageCSS ? pageCSS : ""}">
            <link rel="stylesheet" href="/stylesheets/style.css">
            <link rel="stylesheet" href="/stylesheets/global.css">


            <link rel="preload" href="https://platform.twitter.com/widgets.js" as="script" type="application/javascript" crossorigin="anonymous">
            <link rel="preload" href="/fonts/KnightWarrior.otf" as="font" type="font/otf" crossorigin="">
            <link rel="preload" href="/fonts/VeniteAdoremusStraight.ttf" as="font" type="font/otf" crossorigin="">


            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

`;
};
