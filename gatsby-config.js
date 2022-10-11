module.exports = {
  siteMetadata: {
    title: "Warung Makan Mbok Katini",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "menu",
        path: "./data",
      },
    },
    "gatsby-transformer-json",
  ],
};
