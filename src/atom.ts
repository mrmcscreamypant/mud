import * as THREE from 'three';
import * as QUARKS from 'three.quarks';

export default {
    duration: 5,
    looping: true,
    // Emit from a cone shape
    shape: new QUARKS.ConeEmitter({
        radius: 0.5,
        angle: Math.PI / 8,
    }),
    // Particle properties
    startLife: new QUARKS.IntervalValue(1,
        2),
    startSpeed: new QUARKS.IntervalValue(2,
        4),
    startSize: new QUARKS.IntervalValue(0.8,
        1.2),
    startColor: new QUARKS.ConstantColor(new QUARKS.Vector4(1,
        0.5,
        0.1,
        1)),
    // Material with fire texture
    material: new THREE.MeshNormalMaterial({
    }),
    // Behaviors
    behaviors: [
        // Size gradually increases then decreases
        new QUARKS.SizeOverLife(
            new QUARKS.PiecewiseBezier([
                [new QUARKS.Bezier(0.5,
                    1,
                    1,
                    0),
                    0
                ]
            ]),
        ),
        // Color changes from yellow to red to black
        new QUARKS.ColorOverLife(
            new QUARKS.Gradient(
                [
                    [new QUARKS.Vector3(1,
                        0.8,
                        0.2),
                        0
                    ],
                    [new QUARKS.Vector3(1,
                        0.2,
                        0.1),
                        0.5
                    ],
                    [new QUARKS.Vector3(0.1,
                        0.1,
                        0.1),
                        1
                    ],
                ],
                [
                    [
                        1,
                        0
                    ],
                    [
                        0.8,
                        0.5
                    ],
                    [
                        0,
                        1
                    ],
                ],
            ),
        ),
        // Particles rise upward
        new QUARKS.ApplyForce(
            new QUARKS.Vector3(0,
                5,
                0),
            new QUARKS.ConstantValue(1),
        ),
        // Add turbulence for realistic fire movement
        new QUARKS.TurbulenceField(
            new QUARKS.Vector3(2,
                2,
                2),
            2,
            new QUARKS.Vector3(1,
                2,
                1),
            new QUARKS.Vector3(0.1,
                0.1,
                0.1),
        ),
    ],
} as QUARKS.ParticleSystemParameters;