import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContentPanel from '../components/content-panel/content-panel';
import Orbit from '../scenes/orbit/orbit';
import Collision from '../scenes/collision/collision';

const scenes = [
    { name: 'Orbit', scene: Orbit },
    { name: 'Collision', scene: Collision }
]



const IndexPage = () => (
    <div id="content">
        {scenes.map(scene => <ContentPanel name={scene.name} scene={scene.scene} />)}
    </div>
)

export default IndexPage
