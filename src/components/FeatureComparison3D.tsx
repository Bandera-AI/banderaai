
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
// Updated import path for OrbitControls with proper typing
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const FeatureComparison3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f7);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 15, 15);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.maxPolarAngle = Math.PI / 2;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Add grid
    const gridHelper = new THREE.GridHelper(20, 20, 0xaaaaaa, 0xdddddd);
    scene.add(gridHelper);

    // Define bar groups
    const categories = [
      "Lead Data Accuracy",
      "Predictive AI Scoring",
      "Outreach Automation",
      "AI Messaging",
      "Email Deliverability",
      "Social Monitoring"
    ];

    const companies = [
      { name: "Bandera AI", color: 0x8B1A7F }, // Purple
      { name: "LubSpot", color: 0x00BCA9 }, // Teal
      { name: "Trigify", color: 0x5D61AA }, // Blue
      { name: "Persana.ai", color: 0x6A5F9E }, // Indigo 
      { name: "Clay", color: 0xF9B418 }, // Yellow
      { name: "Replify", color: 0xE94E1B }  // Orange
    ];

    const values = [
      [90, 75, 10, 11, 9, 10], // Bandera AI
      [80, 70, 8, 7, 10, 9],   // LubSpot
      [82, 76, 7, 9, 8, 7],    // Trigify
      [78, 74, 8, 9, 7, 8],    // Persana.ai
      [84, 78, 8, 10, 9, 7],   // Clay
      [77, 73, 9, 8, 8, 8]     // Replify
    ];

    // Create bars
    const barWidth = 0.8;
    const barDepth = 0.8;
    const spacing = 0.3;
    const groupSpacing = 2;

    // Create bars for each company and category
    for (let i = 0; i < companies.length; i++) {
      for (let j = 0; j < categories.length; j++) {
        const height = values[i][j] / 10; // Scale down values
        
        const geometry = new THREE.BoxGeometry(barWidth, height, barDepth);
        const material = new THREE.MeshStandardMaterial({ 
          color: companies[i].color,
          roughness: 0.5,
          metalness: 0.2
        });
        
        const bar = new THREE.Mesh(geometry, material);
        
        // Position the bar
        const x = (i - companies.length / 2) * (barWidth + spacing);
        const z = (j - categories.length / 2) * groupSpacing;
        
        bar.position.set(x, height / 2, z);
        scene.add(bar);
        
        // Add hover effect
        const originalY = height / 2;
        bar.userData = { originalY, company: companies[i].name, category: categories[j] };
      }
    }

    // Add category text
    categories.forEach((category, index) => {
      const z = (index - categories.length / 2) * groupSpacing;
      const textGeometry = new THREE.PlaneGeometry(4, 0.5);
      
      // Create canvas for text
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = '#333333';
        context.font = 'bold 24px Arial';
        context.textAlign = 'center';
        context.fillText(category, 128, 40);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide
        });
        
        const text = new THREE.Mesh(textGeometry, material);
        text.position.set(0, 0.1, z);
        text.rotation.x = -Math.PI / 2;
        scene.add(text);
      }
    });

    // Add legend
    const legendGroup = new THREE.Group();
    companies.forEach((company, index) => {
      const boxGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const boxMaterial = new THREE.MeshStandardMaterial({ color: company.color });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      
      box.position.set(6, 8 - index * 0.7, -5);
      legendGroup.add(box);
      
      // Add company name
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 128;
      textCanvas.height = 32;
      const textContext = textCanvas.getContext('2d');
      if (textContext) {
        textContext.fillStyle = '#333333';
        textContext.font = '16px Arial';
        textContext.textAlign = 'left';
        textContext.fillText(company.name, 0, 20);
        
        const texture = new THREE.CanvasTexture(textCanvas);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide
        });
        
        const textGeometry = new THREE.PlaneGeometry(2, 0.5);
        const text = new THREE.Mesh(textGeometry, material);
        text.position.set(7.5, 8 - index * 0.7, -5);
        legendGroup.add(text);
      }
    });
    scene.add(legendGroup);

    // Title
    const titleCanvas = document.createElement('canvas');
    titleCanvas.width = 512;
    titleCanvas.height = 64;
    const titleContext = titleCanvas.getContext('2d');
    if (titleContext) {
      titleContext.fillStyle = '#333333';
      titleContext.font = 'bold 28px Arial';
      titleContext.textAlign = 'center';
      titleContext.fillText('Bandera AI vs Competitors - Feature Comparison', 256, 40);
      
      const texture = new THREE.CanvasTexture(titleCanvas);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      
      const textGeometry = new THREE.PlaneGeometry(10, 1.25);
      const text = new THREE.Mesh(textGeometry, material);
      text.position.set(0, 10, -8);
      scene.add(text);
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      className="w-full h-[500px] rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
};

export default FeatureComparison3D;
