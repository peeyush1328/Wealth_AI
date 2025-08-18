import { getUserAccounts } from "@/actions/dashboard";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AccountCard } from "./_components/account-card";

const Dashboard = async () => {
  const accounts = await getUserAccounts();
  return (
    <div className="px-5">
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed ">
            <CardContent className="flex items-center justify-center h-full text-muted-foreground flex-col">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Create New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts?.data?.length > 0 &&
          accounts?.data?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
