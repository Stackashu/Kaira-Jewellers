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
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Slightly higher for clarity
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true; // Enable shadow maps for realism
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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

    // Lighting - enhanced for realism
    // Main top directional light (casts shadow)
    const topLight = new THREE.DirectionalLight(0xffffff, 1.7);
    topLight.position.set(0, 10, 0);
    topLight.castShadow = true;
    topLight.shadow.mapSize.width = 1024;
    topLight.shadow.mapSize.height = 1024;
    topLight.shadow.camera.near = 1;
    topLight.shadow.camera.far = 30;
    topLight.shadow.camera.left = -10;
    topLight.shadow.camera.right = 10;
    topLight.shadow.camera.top = 10;
    topLight.shadow.camera.bottom = -10;
    scene.add(topLight);

    // Soft fill light from the front
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fillLight.position.set(0, 3, 6);
    fillLight.castShadow = false;
    scene.add(fillLight);

    // Subtle ambient light for soft shadow fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.22);
    scene.add(ambientLight);

    // Rim light for extra sparkle
    const rimLight = new THREE.PointLight(0xffffff, 0.5, 20);
    rimLight.position.set(-5, 5, 5);
    scene.add(rimLight);

    // Draco Loader setup
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    dracoLoaderRef.current = dracoLoader;

    // GLTF Loader with Draco
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/ring3.glb",
      (gltf) => {
        const ringModel = gltf.scene;

        // --- ENHANCEMENT: Material and mesh improvements ---

        // Traverse and enhance materials
        ringModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              // Ensure only front side is rendered (no double side)
              child.material.side = THREE.FrontSide;
              // Enhance metalness/roughness for more realistic gold/silver
              if ("metalness" in child.material) child.material.metalness = 1;
              if ("roughness" in child.material) child.material.roughness = 0.18;
              if ("envMapIntensity" in child.material) child.material.envMapIntensity = 1.5;
              child.material.needsUpdate = true;
            }
          }
        });


        // Determine viewport width to set different values for desktop/tablet/mobile
        const vw = window.innerWidth;
        // Add axes helper to visualize model axes (for debugging)
        const axesHelper = new THREE.AxesHelper(2);
        // ringModel.add(axesHelper);

        // Default (desktop)
        let initialPos = { x: -2, y: 1, z: 6 };
        let initialScale = { x: 17, y: 17, z: 17 };
        let initialRot = {  x: Math.PI / 2 * 0.7, y: Math.PI / 2 * 1.6, z: 0  };
        let toAnimatePos = { x: -1.8, y: 0.7, z: 0 };
        let toAnimateRot = { x:Math.PI/2*0.8,y:Math.PI/2 * 0.3, z: -Math.PI/ 2 * 0.1 };
        let scrollToPos = { x: 1.5, y: 1.3,z:0.5 };
        let scrollToScale = { x: 17, y: 17, z: 17 };
        let scrollToRot = { y: (Math.PI / 2) * 2.5, x: Math.PI / 2  };

        // Tablet
        if (vw <= 900 && vw > 600) {
          initialPos = { x: -1, y: 2, z: 4.5 };
          initialScale = { x: 15, y: 15, z:15 };
          initialRot = { x: Math.PI / 2 * 0.8, y: Math.PI / 2 * 4.3, z: Math.PI / 2 * 0.5  };
          toAnimatePos = { x: 0, y: 1.6, z: 0 };
          toAnimateRot = { x:Math.PI/2 * 0.9,y:0,z:Math.PI/2 * 0.1 };
          scrollToPos = { x: 0, y: 1.4, z: 0 };
          scrollToScale = { x: 16, y: 16, z: 16 };
          scrollToRot = { y: -Math.PI/ 2 * 0.9, x: Math.PI / 2 , z: 0 };
        }

        if (vw <= 480) {
          initialPos = { x: -0.5, y: 2, z: 4 };
          initialScale = { x: 14, y: 14, z: 14 };
          initialRot = { x: 0, y: 0, z: 0 };
          toAnimatePos = { x: 0.1, y: 1.8, z: 0 };
          toAnimateRot = { x: Math.PI / 2, y: 0, z:  0 };
          scrollToPos = { x: 0, y: 0.9, z: 0 };
          scrollToScale = { x: 13, y: 13, z: 13 };
          scrollToRot = {y: -Math.PI/ 2 * 0.9, x: Math.PI / 2 , z: 0  };
        }
        if (vw <= 390) {
          initialPos = { x: -0.5, y: 2, z: 4 };
          initialScale = { x: 14, y: 14, z: 14 };
          initialRot = { x: 0, y: 0, z: 0 };
          toAnimatePos = { x: 0.1, y: 1.8, z: 0 };
          toAnimateRot = { x: Math.PI / 2, y: 0, z:  0 };
          scrollToPos = { x: 0, y: 1.3, z: 0 };
          scrollToScale = { x: 15, y: 15, z: 15 };
          scrollToRot = {y: -Math.PI/ 2 * 0.9, x: Math.PI / 2 , z: 0  };
        }

        // Set initial position, scale, and rotation using initial values
        ringModel.position.set(initialPos.x, initialPos.y, initialPos.z);
        ringModel.scale.set(initialScale.x, initialScale.y, initialScale.z);
        ringModel.rotation.set(initialRot.x, initialRot.y, initialRot.z);
        scene.add(ringModel);

        // Animate the model smoothly from its initial position to the "toAnimatePos" AND rotate in y axis in sync
        gsap.to(
          ringModel.position,
          {
            ...toAnimatePos,
            duration: 2.5,
            ease: "power2.inOut",
          },
          0
        );
        gsap.to(
          ringModel.rotation,
          {
            ...toAnimateRot,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              // Only start scrollTrigger timeline after initial animation is done
              var tl = gsap.timeline({
                scrollTrigger: {
                  trigger: mainContainer.current,
                  start: "top 10%",
                  end: "bottom bottom",
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
          },
          0
        );
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );

  
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
        height: "90vh",
        position: "",
        background: "transparent",
        pointerEvents: "auto",
      }}
    ></div>
  );
};

export default RingModel;
