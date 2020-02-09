import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContentPanel from '../components/content-panel/content-panel';
import Orbit from '../scenes/orbit/orbit';

import Constellation from '../images/constellation.jpg';
import Galaxy from '../images/galaxy.jpg';
import Universe from '../images/blue-universe.jpg';

const scenes = [
    { name: 'Orbit', scene: Orbit }
]



const IndexPage = () => (
    <div id="content">
        {scenes.map(scene => <ContentPanel name={scene.name} scene={scene.scene} />)}
    </div>
)

export default IndexPage
