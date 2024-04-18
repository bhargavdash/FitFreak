// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Placeholder data
let users = [];
let challenges = [];
let progress = [];

// User Authentication
app.post('/api/auth/register', (req, res) => {
  // Implement registration logic
  const { username, email, password } = req.body;
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);
  res.json(newUser);
});

app.post('/api/auth/login', (req, res) => {
  // Implement login logic
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  // Implement logout logic
  res.json({ message: 'Logout successful' });
});

// User Profile
app.get('/api/users/:userId', (req, res) => {
  // Implement logic to get user profile
  const { userId } = req.params;
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.put('/api/users/:userId', (req, res) => {
  // Implement logic to update user profile
  const { userId } = req.params;
  const { username, email, password } = req.body;
  const index = users.findIndex(user => user.id === parseInt(userId));
  if (index !== -1) {
    users[index] = { ...users[index], username, email, password };
    res.json({ message: 'User profile updated', user: users[index] });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/api/users/:userId', (req, res) => {
  // Implement logic to delete user account
  const { userId } = req.params;
  const index = users.findIndex(user => user.id === parseInt(userId));
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: 'User account deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Fitness Challenges
app.get('/api/challenges', (req, res) => {
  // Implement logic to get all challenges
  res.json(challenges);
});

app.get('/api/challenges/:challengeId', (req, res) => {
  // Implement logic to get details of a specific challenge
  const { challengeId } = req.params;
  const challenge = challenges.find(challenge => challenge.id === parseInt(challengeId));
  if (challenge) {
    res.json(challenge);
  } else {
    res.status(404).json({ message: 'Challenge not found' });
  }
});

app.post('/api/challenges', (req, res) => {
  // Implement logic to create a new challenge
  const { title, description } = req.body;
  const newChallenge = { id: challenges.length + 1, title, description };
  challenges.push(newChallenge);
  res.json(newChallenge);
});

app.put('/api/challenges/:challengeId', (req, res) => {
  // Implement logic to update an existing challenge
  const { challengeId } = req.params;
  const { title, description } = req.body;
  const index = challenges.findIndex(challenge => challenge.id === parseInt(challengeId));
  if (index !== -1) {
    challenges[index] = { ...challenges[index], title, description };
    res.json({ message: 'Challenge updated', challenge: challenges[index] });
  } else {
    res.status(404).json({ message: 'Challenge not found' });
  }
});

app.delete('/api/challenges/:challengeId', (req, res) => {
  // Implement logic to delete a challenge
  const { challengeId } = req.params;
  const index = challenges.findIndex(challenge => challenge.id === parseInt(challengeId));
  if (index !== -1) {
    challenges.splice(index, 1);
    res.json({ message: 'Challenge deleted' });
  } else {
    res.status(404).json({ message: 'Challenge not found' });
  }
});

// Progress Tracking
app.get('/api/progress', (req, res) => {
  // Implement logic to get progress tracking data
  res.json(progress);
});

app.post('/api/progress', (req, res) => {
  // Implement logic to add progress tracking data
  const { userId, challengeId, progressData } = req.body;
  const newProgress = { id: progress.length + 1, userId, challengeId, progressData };
  progress.push(newProgress);
  res.json(newProgress);
});

app.put('/api/progress/:progressId', (req, res) => {
  // Implement logic to update progress tracking data
  const { progressId } = req.params;
  const { progressData } = req.body;
  const index = progress.findIndex(item => item.id === parseInt(progressId));
  if (index !== -1) {
    progress[index].progressData = progressData;
    res.json({ message: 'Progress updated', progress: progress[index] });
  } else {
    res.status(404).json({ message: 'Progress not found' });
  }
});

app.delete('/api/progress/:progressId', (req, res) => {
  // Implement logic to delete progress tracking data
  const { progressId } = req.params;
  const index = progress.findIndex(item => item.id === parseInt(progressId));
  if (index !== -1) {
    progress.splice(index, 1);
    res.json({ message: 'Progress deleted' });
  } else {
    res.status(404).json({ message: 'Progress not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
