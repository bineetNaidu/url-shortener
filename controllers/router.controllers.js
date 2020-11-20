/* eslint-disable import/extensions */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/prefer-default-export */
import { nanoid } from 'nanoid';
import URLschema from '../model/Url.model.js';

export const getUrl = async (req, res) => {
  const { slug } = req.params;
  const url = await URLschema.findOne({ slug });
  res.status(200).json({
    url,
    success: true,
  });
};

export const createShortenUrl = async (req, res) => {
  const { url, slug } = req.body;
  const newSlug = nanoid(10);
  const newShortenUrl = new URLschema({
    original_url: url,
    slug: slug ? slug : newSlug,
  });
  await newShortenUrl.save();
  res.status(200).json({
    url: newShortenUrl,
    success: true,
  });
};
