import { useState, useEffect } from "react";

// Simulate real-time data updates
export const useRealTimeData = () => {
  const [onlineExperts, setOnlineExperts] = useState(342);
  const [averageResponseTime, setAverageResponseTime] = useState(2.3);
  const [totalProjects, setTotalProjects] = useState(25000);
  const [activeProjects, setActiveProjects] = useState(1547);

  useEffect(() => {
    // Simulate real-time updates every 5 seconds
    const interval = setInterval(() => {
      setOnlineExperts(prev => prev + Math.floor(Math.random() * 21) - 10); // ±10 variation
      setAverageResponseTime(prev => Math.max(1.5, Math.min(4.0, prev + (Math.random() - 0.5) * 0.2))); // Small variations
      setTotalProjects(prev => prev + Math.floor(Math.random() * 3)); // Slowly increasing
      setActiveProjects(prev => prev + Math.floor(Math.random() * 11) - 5); // ±5 variation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    onlineExperts,
    averageResponseTime,
    totalProjects,
    activeProjects
  };
};

// Simulate live notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    type: 'project' | 'message' | 'payment' | 'review';
    title: string;
    time: string;
  }>>([]);

  useEffect(() => {
    const notificationTypes = [
      { type: 'project' as const, title: 'New project match found' },
      { type: 'message' as const, title: 'New message from client' },
      { type: 'payment' as const, title: 'Payment received' },
      { type: 'review' as const, title: 'New 5-star review received' },
    ];

    // Add a random notification every 30 seconds
    const interval = setInterval(() => {
      const randomNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
      const newNotification = {
        id: Date.now(),
        ...randomNotification,
        time: 'Just now'
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]); // Keep only 5 most recent
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const clearNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return {
    notifications,
    clearNotification,
    hasUnread: notifications.length > 0
  };
};