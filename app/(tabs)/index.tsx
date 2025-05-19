import * as React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useQueryWithLoading } from "../../hooks/useQueryWithLoading";
import { postsApi } from "../../services/api/posts";
import { getStatusBarHeight } from "../../utils/uiHelper";

export default function Home() {
  const topPadding = getStatusBarHeight + 40;

  // React Query hook
  const {
    data: posts,
    isLoading,
    error,
  } = useQueryWithLoading({
    queryKey: ["posts"],
    queryFn: postsApi.getPosts,
  });

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: topPadding }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text className="text-red-500 text-center">Error loading posts</Text>
      ) : (
        <ScrollView className="px-4">
          {posts?.map((post: any) => (
            <View
              key={post.id}
              className="bg-white p-4 rounded-lg mb-4 shadow-sm"
            >
              <Text className="font-bold text-lg mb-2">{post.title}</Text>
              <Text className="text-gray-600">{post.body}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
