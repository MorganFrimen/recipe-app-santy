import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "rt5asgjy", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: '2022-04-25',
    useSdn: true,
    token: process.env.TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
}