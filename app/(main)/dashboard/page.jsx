import { getUserAccounts } from "@/actions/dashboard";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AccountCard } from "./_components/account-card";
import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "./_components/budget-progress";

const Dashboard = async () => {
  const accounts = await getUserAccounts();
  const defaultAccount = accounts?.data?.find((acc) => acc.isDefault);
  let budget = null;
  if (defaultAccount) {
    budget = await getCurrentBudget(defaultAccount.id);
  }
  console.log(budget)

  return (
    <div className="space-y-8">
      <BudgetProgress
        initialBudget={budget?.budget}
        currentExpenses={budget?.currentExpenses || 0}
      />
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
