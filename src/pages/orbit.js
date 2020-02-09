import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import OrbitScene from '../scenes/orbit/orbit'

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
            <Link to="/">Back</Link>
        </Layout>
    )
}

export default Orbit