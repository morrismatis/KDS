import * as THREE from 'three';
import faceplateImg from '../faceplate.jpg';
import woodpanelImg from '../jGlzr.jpg';

// Define geometry dimensions (replace with your actual values as needed)
const faceplateWidth = 10;
const faceplateHeight = 5;
const faceplateDepth = 0.5;

const panelWidth = 1;
const panelHeight = 5;
const panelDepth = 0.5;

const textureLoader = new THREE.TextureLoader();
const faceplateTexture = textureLoader.load(faceplateImg);
const woodPanelTexture = textureLoader.load(woodpanelImg);

// Faceplate mesh with faceplate.jpg as background
const facePlateGeometry = new THREE.BoxGeometry(faceplateWidth, faceplateHeight, faceplateDepth);
const facePlateMaterial = new THREE.MeshStandardMaterial({ map: faceplateTexture });
const facePlateMesh = new THREE.Mesh(facePlateGeometry, facePlateMaterial);
// ...add facePlateMesh to scene...

// Wood panel mesh with jGlzr.jpg as background
const woodPanelGeometry = new THREE.BoxGeometry(panelWidth, panelHeight, panelDepth);
const woodPanelMaterial = new THREE.MeshStandardMaterial({ map: woodPanelTexture });
const woodPanelMesh = new THREE.Mesh(woodPanelGeometry, woodPanelMaterial);
// ...add woodPanelMesh to scene...

// Use only local sample paths
const kickSample = 'Kit-1-Acoustic/CYCdh_K1close_Kick-01.wav';
const snareSample = 'Kit-1-Acoustic/CYCdh_K1close_Snr-01.wav';
const hihatSample = 'Kit-1-Acoustic/CYCdh_K1close_ClHat-01.wav';

// Example with Tone.js Player (after user gesture)
const kickPlayer = new Tone.Player(kickSample).toDestination();
const snarePlayer = new Tone.Player(snareSample).toDestination();
const hihatPlayer = new Tone.Player(hihatSample).toDestination();

// Remove or comment out any code that loads samples from Tone.js's built-in kits or remote URLs