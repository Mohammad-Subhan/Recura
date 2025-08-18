const sampleUser = {
    id: 1,
    fullName: "Alice Johnson",
    email: "alice@example.com",
    isStaff: false,
    createdAt: "2025-07-18T12:00:00Z"
}

const sampleRecordings = [
    {
        id: 1,
        user: 1,
        title: "Team Meeting",
        views: 100,
        description: "Weekly sync-up with the team",
        videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1752560925914-269c6f90f0a5",
        isPublic: false,
        createdAt: "2025-07-18T12:30:00Z",
        updatedAt: "2025-07-18T12:45:00Z",
        duration: "00:30:00"
    },
    {
        id: 2,
        user: 1,
        title: "Product Demo",
        views: 200,
        description: "Demo of the new product features",
        videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1752560925914-269c6f90f0a5",
        isPublic: true,
        createdAt: "2025-07-17T10:00:00Z",
        updatedAt: "2025-07-17T10:20:00Z",
        duration: "00:20:00"
    },
    {
        id: 3,
        user: 1,
        title: "Client Call",
        views: 150,
        description: "Call with ABC Corp",
        videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1752560925914-269c6f90f0a5",
        isPublic: false,
        createdAt: "2025-07-16T15:00:00Z",
        updatedAt: "2025-07-16T15:30:00Z",
        duration: "00:15:00"
    },
    {
        id: 4,
        user: 1,
        title: "Webinar Recording",
        views: 300,
        description: "Recording of the marketing webinar",
        videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1752560925914-269c6f90f0a5",
        isPublic: true,
        createdAt: "2025-07-15T18:00:00Z",
        updatedAt: "2025-07-15T18:40:00Z",
        duration: "00:40:00"
    },
    {
        id: 5,
        user: 1,
        title: "Interview Session",
        views: 50,
        description: "Job interview with candidate",
        videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1752560925914-269c6f90f0a5",
        isPublic: false,
        createdAt: "2025-07-14T12:00:00Z",
        updatedAt: "2025-07-14T12:30:00Z",
        duration: "00:25:00"
    }
]

const sampleSharedLinks = [
    {
        id: 1,
        recording: 2,
        token: "abc123def456ghi789jkl012mno345pq",
        createdAt: "2025-07-17T10:10:00Z"
    },
    {
        id: 2,
        recording: 4,
        token: "def456ghi789jkl012mno345pqabc123",
        createdAt: "2025-07-15T18:10:00Z"
    },
    {
        id: 3,
        recording: 1,
        token: "ghi789jkl012mno345pqabc123def456",
        createdAt: "2025-07-18T12:40:00Z"
    },
    {
        id: 4,
        recording: 3,
        token: "jkl012mno345pqabc123def456ghi789",
        createdAt: "2025-07-16T15:10:00Z"
    },
    {
        id: 5,
        recording: 5,
        token: "mno345pqabc123def456ghi789jkl012",
        createdAt: "2025-07-14T12:10:00Z"
    }
]

const samplePreferences = {
    id: 1,
    user: 1,
    theme: "light"
}

const assets = {
    sampleUser,
    sampleRecordings,
    sampleSharedLinks,
    samplePreferences
}

export default assets;