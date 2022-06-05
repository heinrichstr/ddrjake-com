import * as React from "react";
import { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import favicon from '../img/DDRJake_2.png';

export default () => {
    useEffect(() => {
        let app = new PIXI.Application({ width: 640, height: 360 });

        document.getElementById('app').appendChild(app.view);

        let sprite = PIXI.Sprite.from(favicon);

        app.stage.addChild(sprite);

        sprite.scale.x = .25;
        sprite.scale.y = .25;

        return () => {
            console.log('Component will be unmount')
        }
    }, []);
    return (
        <div id="app">
        </div>
    );
};
