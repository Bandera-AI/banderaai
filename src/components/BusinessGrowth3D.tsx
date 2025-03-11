
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const BusinessGrowth3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 1;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Setup simple controls manually since OrbitControls is causing issues
    let isMouseDown = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      scene.rotation.y += deltaMove.x * 0.005;
      scene.rotation.x += deltaMove.y * 0.005;
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create group for all elements
    const group = new THREE.Group();
    scene.add(group);
    
    // Base platform
    const baseGeometry = new THREE.CircleGeometry(3, 32);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf0f0f0,
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.rotation.x = -Math.PI / 2;
    base.position.y = -1;
    group.add(base);
    
    // Company building in center
    const buildingGeometry = new THREE.BoxGeometry(0.8, 1.5, 0.8);
    const buildingMaterial = new THREE.MeshPhongMaterial({
      color: 0x9B87F5, // Purple
      transparent: true,
      opacity: 0.9,
      shininess: 100
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.y = -0.25;
    group.add(building);
    
    // Function to create feature pillars
    const createFeaturePillar = (radius: number, angle: number, height: number, color: number, icon?: string) => {
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      
      const pillarGeometry = new THREE.CylinderGeometry(0.15, 0.15, height, 16);
      const pillarMaterial = new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity: 0.8,
        shininess: 80
      });
      
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(x, -1 + (height / 2), z);
      
      return { pillar, position: { x, y: -1 + height, z } };
    };
    
    // Create feature pillars around the building (representing the 4 main features)
    const feature1 = createFeaturePillar(2, 0, 1.2, 0xE94AA0); // Lead Generation
    const feature2 = createFeaturePillar(2, Math.PI/2, 1.5, 0x9B87F5); // Outreach Automation
    const feature3 = createFeaturePillar(2, Math.PI, 1.3, 0x8B5CF6); // CRM Integration
    const feature4 = createFeaturePillar(2, 3*Math.PI/2, 1.4, 0x33C3F0); // Social Listening
    
    group.add(feature1.pillar, feature2.pillar, feature3.pillar, feature4.pillar);
    
    // Create connection beams between building and features
    const connectToBuilding = (featurePosition: { x: number, y: number, z: number }, color: number) => {
      const startPoint = new THREE.Vector3(0, 0, 0);
      const endPoint = new THREE.Vector3(featurePosition.x, featurePosition.y, featurePosition.z);
      
      const direction = new THREE.Vector3().subVectors(endPoint, startPoint);
      const length = direction.length();
      
      const beamGeometry = new THREE.CylinderGeometry(0.03, 0.03, length, 8);
      const beamMaterial = new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity: 0.6,
        shininess: 50
      });
      
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      
      // Position & rotate the beam to connect the points
      beam.position.copy(startPoint);
      beam.position.addScaledVector(direction, 0.5);
      
      // Rotate the beam to point in the correct direction
      beam.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize()
      );
      
      return beam;
    };
    
    const beam1 = connectToBuilding(feature1.position, 0xE94AA0);
    const beam2 = connectToBuilding(feature2.position, 0x9B87F5);
    const beam3 = connectToBuilding(feature3.position, 0x8B5CF6);
    const beam4 = connectToBuilding(feature4.position, 0x33C3F0);
    
    group.add(beam1, beam2, beam3, beam4);
    
    // Create orbital data nodes (representing leads/contacts)
    const createOrbitalNodes = (count: number, radius: number, height: number, color: number) => {
      const nodes = new THREE.Group();
      
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const nodeMaterial = new THREE.MeshPhongMaterial({
          color,
          transparent: true,
          opacity: 0.8,
          shininess: 80
        });
        
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(x, height, z);
        
        // Add slight random offset for more natural look
        node.position.x += (Math.random() - 0.5) * 0.2;
        node.position.z += (Math.random() - 0.5) * 0.2;
        node.position.y += (Math.random() - 0.5) * 0.2;
        
        // Store original position for animation
        node.userData.originalPosition = {
          x: node.position.x,
          y: node.position.y,
          z: node.position.z
        };
        
        node.userData.speed = 0.001 + Math.random() * 0.002;
        node.userData.phase = Math.random() * Math.PI * 2;
        
        nodes.add(node);
      }
      
      return nodes;
    };
    
    const leadNodes = createOrbitalNodes(12, 2.5, 0, 0xE94AA0);
    const communicationNodes = createOrbitalNodes(10, 3, 0.5, 0x9B87F5);
    
    group.add(leadNodes, communicationNodes);
    
    // Add particles for dynamic effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Floating text labels
    const createTextLabel = (text: string, position: { x: number, y: number, z: number }) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 128;
      
      if (context) {
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        context.font = 'Bold 24px Arial';
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas);
        
        const material = new THREE.SpriteMaterial({
          map: texture,
          transparent: true
        });
        
        const sprite = new THREE.Sprite(material);
        sprite.position.set(position.x, position.y + 0.3, position.z);
        sprite.scale.set(1, 0.5, 1);
        
        return sprite;
      }
      
      return null;
    };
    
    // Add labels for features
    const label1 = createTextLabel("Lead Gen", feature1.position);
    const label2 = createTextLabel("Outreach", feature2.position);
    const label3 = createTextLabel("CRM", feature3.position);
    const label4 = createTextLabel("Social", feature4.position);
    
    if (label1) group.add(label1);
    if (label2) group.add(label2);
    if (label3) group.add(label3);
    if (label4) group.add(label4);
    
    // Animation variables
    let time = 0;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Rotate the entire scene slowly if not being dragged
      if (!isMouseDown) {
        scene.rotation.y += 0.002;
      }
      
      // Animate building pulsing slightly
      building.scale.y = 1 + Math.sin(time) * 0.05;
      
      // Animate connection beams opacity pulsing
      [beam1, beam2, beam3, beam4].forEach((beam, i) => {
        if (beam.material instanceof THREE.MeshPhongMaterial) {
          beam.material.opacity = 0.4 + Math.sin(time + i * 0.5) * 0.2;
        }
      });
      
      // Animate orbital nodes
      leadNodes.children.forEach((node) => {
        if (node.userData && node.userData.originalPosition) {
          const op = node.userData.originalPosition;
          const speed = node.userData.speed;
          const phase = node.userData.phase;
          
          node.position.x = op.x + Math.sin(time * speed + phase) * 0.2;
          node.position.z = op.z + Math.cos(time * speed + phase) * 0.2;
          node.position.y = op.y + Math.sin(time * speed * 2) * 0.1;
        }
      });
      
      communicationNodes.children.forEach((node) => {
        if (node.userData && node.userData.originalPosition) {
          const op = node.userData.originalPosition;
          const speed = node.userData.speed;
          const phase = node.userData.phase;
          
          node.position.x = op.x + Math.sin(time * speed + phase) * 0.3;
          node.position.z = op.z + Math.cos(time * speed + phase) * 0.3;
          node.position.y = op.y + Math.cos(time * speed * 1.5) * 0.15;
        }
      });
      
      // Animate particles
      particlesMesh.rotation.y += 0.001;
      
      // Make labels always face the camera (billboarding)
      [label1, label2, label3, label4].forEach(label => {
        if (label) {
          label.lookAt(camera.position);
        }
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      mountRef.current?.removeChild(renderer.domElement);
      
      // Dispose resources
      scene.clear();
    };
  }, []);
  
  return (
    <motion.div 
      ref={mountRef} 
      className="w-full h-[400px] md:h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  );
};

export default BusinessGrowth3D;
