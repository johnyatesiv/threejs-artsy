import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OrbitScene from '../scenes/orbitScene'

function Orbit() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const orbitSceneContainer = document.getElementById('orbitSceneContainer')
            const orbitScene = new OrbitScene(orbitSceneContainer)
        }
    })

    return (
        <Layout>
            <SEO title="Orbit"/>
            <div id="orbitSceneContainer"></div>
            <Link to="/">Back</Link>
        </Layout>
    )
}

export default Orbit