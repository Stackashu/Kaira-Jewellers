import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import gsap from "gsap";

const RingModel = ({ mainContainer }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const dracoLoaderRef = useRef(null);
  const envMapRef = useRef(null);

  // Helper to resize renderer and camera
  const handleResize = () => {
    if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    rendererRef.current.setSize(width, height, false);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
  };

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure =1;
    renderer.shadowMap.enabled = false; // Disable shadow maps for performance
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // HDRI Environment Map
    let envMap = null;
    const rgbeLoader = new RGBELoader();
    rgbeLoader
      .setDataType(THREE.FloatType)
      .load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/hotel_room_1k.hdr",
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
          // scene.background = texture; // Make HDRI visible in background
          envMap = texture;
          envMapRef.current = envMap;
        }
      );

    // Lighting - set the lighting on the top of the model
    // Main top directional light
    const topLight = new THREE.DirectionalLight(0xffffff, 3.5);
    topLight.position.set(0, 10, 0); // Directly above the model
    topLight.target.position.set(0, 0, 0);
    scene.add(topLight);
    // scene.add(topLight.target);

    // Optional: Add a soft fill light from the front to gently illuminate the face
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fillLight.position.set(0, 3, 6);
    fillLight.target.position.set(0, 0, 0);
    scene.add(fillLight);
    // scene.add(fillLight.target);

    // Optional: Add a subtle ambient light for soft shadow fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    // Draco Loader setup
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    dracoLoaderRef.current = dracoLoader;

    // GLTF Loader with Draco
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/goldFolder/scene.gltf",
      (gltf) => {
        const ringModel = gltf.scene;
        

        // Determine viewport width to set different values for desktop/tablet/mobile
        const vw = window.innerWidth;
        // Add axes helper to visualize model axes (for debugging)
        const axesHelper = new THREE.AxesHelper(2);
        // ringModel.add(axesHelper);

        // Default (desktop)
        let initialPos = { x: -2, y: 2, z: 4 };
        let initialScale = { x: 5.9, y: 5.9, z: 5.9 };
        let initialRot = { x:0, y: -Math.PI / 4, z: 0 };
        let toAnimatePos = { x: -2, y: 1.4, z: 0 }; // New: intermediate animation position
        let toAnimateRot = { x:Math.PI /2 * 0.9, y: Math.PI / 2 * 0.5 , z:0 }; // Target y rotation for initial animation
        let scrollToPos = { x: 2, y: 0.2 };
        let scrollToScale = { x: 5.2, y: 5.2, z: 5.2 };
        let scrollToRot = { y: (Math.PI / 2) * 8, x: Math.PI / 2 * 0.01 };

        // Tablet
        if (vw <= 900 && vw > 600) {
          initialPos = { x: -0.7, y: 1.5, z: 0.5 };
          initialScale = { x: 2.6, y: 2.6, z: 2.6 };
          initialRot = { x: (Math.PI / 3) * 1.3, y: (Math.PI / 2) * 0.4, z: 0 };
          toAnimatePos = { x: 0.08, y: 2.45, z: 0 };
          toAnimateRot = { x: Math.PI/2  * 0.8, y:Math.PI/2 * 0.3, z:Math.PI /2 * 0.5 };
          scrollToPos = { x: 0, y: 0.1,z:0 };
          scrollToScale = { x: 2.5, y: 2.5, z: 2.5 };
          scrollToRot = { y: Math.PI * 4 , x: Math.PI /2 * 0.6  , z: 0 };
        }
        
        if (vw <= 480) {
          initialPos = { x: -1, y: 2, z: 2 };
          initialScale = { x: 3.5, y: 3.5, z: 3.5 };
          initialRot = { x:0, y:0, z:0 };
          toAnimatePos = { x: 0, y: 2, z: 0 };
          toAnimateRot = { x: Math.PI/2  * 0.6, y:Math.PI/2 * 0.3, z:Math.PI /2 * 0.5 };
          scrollToPos = { x: 0, y: 0.9,z:0 };
          scrollToScale = { x: 4, y: 4, z: 4 };
          scrollToRot = { y: Math.PI * 4 , x: Math.PI /2   , z: 0 };
        }
        if (vw <= 390) {
          initialPos = { x: -1, y: 2, z: 2 };
          initialScale = { x: 3.5, y: 3.5, z: 3.5 };
          initialRot = { x:0, y:0, z:0 };
          toAnimatePos = { x: 0, y: 2.2, z: 0 };
          toAnimateRot = { x: Math.PI/2  * 0.6, y:Math.PI/2 * 0.3, z:Math.PI /2 * 0.5 };
          scrollToPos = { x: 0, y: 1.8,z:0 };
          scrollToScale = { x: 4, y: 4, z: 4 };
          scrollToRot = { y: Math.PI  * 4 , x: Math.PI / 2   , z: 0 };
        }

        // Set initial position, scale, and rotation using initial values
        ringModel.position.set(initialPos.x, initialPos.y, initialPos.z);
        ringModel.scale.set(initialScale.x, initialScale.y, initialScale.z);
        ringModel.rotation.set(initialRot.x, initialRot.y, initialRot.z);
        scene.add(ringModel);

        // Animate the model smoothly from its initial position to the "toAnimatePos" AND rotate in y axis in sync
        gsap.to(ringModel.position, {
          ...toAnimatePos,
          duration: 2,
          ease: "power2.inOut",
        },0);
        gsap.to(ringModel.rotation, {
          ...toAnimateRot,
          duration: 2,
          ease: "power2.inOut",
          onComplete: () => {
            // Only start scrollTrigger timeline after initial animation is done
            var tl = gsap.timeline({
              scrollTrigger: {
                trigger: mainContainer.current,
                start: "top 10%",
                end: "bottom 90%",
                scrub: 2,
              },
            });
            tl.to(
              ringModel.position,
              {
                ...scrollToPos,
                ease: "power2.inOut",
              },
              0
            );
            tl.to(
              ringModel.rotation,
              {
                ...scrollToRot,
                ease: "power2.inOut",
              },
              0
            );
            tl.to(
              ringModel.scale,
              {
                ...scrollToScale,
                ease: "power2.inOut",
              },
              0
            );
          },
        },0);
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Responsiveness: Add resize handler
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (
          rendererRef.current.domElement &&
          rendererRef.current.domElement.parentNode
        ) {
          rendererRef.current.domElement.parentNode.removeChild(
            rendererRef.current.domElement
          );
        }
      }
      if (dracoLoaderRef.current) {
        dracoLoaderRef.current.dispose();
      }
      if (envMapRef.current) {
        envMapRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "",
        background: "transparent",
        pointerEvents: "auto",
      }}
    ></div>
  );
};

export default RingModel;
