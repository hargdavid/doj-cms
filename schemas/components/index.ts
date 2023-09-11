import { contentContainer } from '../pages/contentPage'
import {contentBlock, contentBlockWithImage} from './contentBlock'
import favicon from './favicon'
import images, { imageWithLink } from './images'
import links, {linkObj} from './links'
import metaData from './metaData'
import textAndImage from './textAndImage'


export const components = [
  contentBlock,
  favicon,
  linkObj,
  links,
  metaData,
  textAndImage,
  contentBlockWithImage,
  contentContainer,
  images,
  imageWithLink
]
