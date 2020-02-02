import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as Three from 'three'
import OrbitScene from '../scenes/orbitScene'

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGLRenderer()
renderer.setSize( window.innerWidth * 0.75, window.innerHeight * 0.75 )

function Orbit() {
    useEffect(() => {
        const orbitSceneContainer = document.getElementById('orbitSceneContainer')
        orbitSceneContainer.appendChild(renderer.domElement)
        const orbitScene = new OrbitScene(scene, camera, renderer)
        orbitScene.run()
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