import { Card, Flex } from "@radix-ui/themes"
import { Skeleton } from "@/app/components"

const issueDetailLoading = () => {
  return (
    <div>
      <Skeleton/>
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="10rem" height={"1.5rem}"} />
      </Flex>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default issueDetailLoading;
