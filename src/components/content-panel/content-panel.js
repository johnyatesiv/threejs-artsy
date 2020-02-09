import React, { useEffect } from "react"
import './content-panel.scss'
import Orbit from '../../scenes/orbit/orbit';

const ContentPanel = ({...props}) => {
    const { name, scene } = props;
    const containerName = `${name}SceneContainer`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sceneContainer = document.getElementById(containerName)
            new scene(sceneContainer)
        }
    })

    return (
        <div className="content-panel parallax">
            <div id={containerName}></div>
        </div>
    )
}

export default ContentPanel
