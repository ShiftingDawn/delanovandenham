import {ProjectImage, ProjectPage} from "$c/ProjectPage";
import {projects} from "@/project";

export default function PageProject() {
  return (
    <ProjectPage project={projects.friday_at_work}>
      <ProjectImage title={"Registering consumption"} src={`/projects/friday_at_work/home.png`}
                    alt={`screenshot of homepage`}>
        <p>
          The homepage provides a streamlined interface for recording drink consumptions. Users simply select a person
          and a drink, then click the Save button to register the transaction. Each entry is automatically added to the
          selected person&apos;s receipt using the current configured drink price.
        </p>
      </ProjectImage>
      <ProjectImage title="Keeping score" src={`/projects/friday_at_work/scores.png`}
                    alt={'Screenshot of scoreboard page'}>
        <p>
          A dynamic scoreboard providing an overview of consumption trends across the current and previous week and
          month. It highlights the top drinkers, biggest spenders, and most popular drinks, making it easy to see who
          and what is driving consumption at a glance.
        </p>
      </ProjectImage>
      <ProjectImage title="Drink management" src={`/projects/friday_at_work/drinks.png`}
                    alt={`screenshot of drinks page`}>
        <p>
          The Drinks page provides an overview of all registered drinks, including their current prices and visibility
          status. Drinks can be hidden to prevent them from appearing on the homepage while remaining available on
          receipts, ensuring historical transactions are preserved.
        </p>
      </ProjectImage>
      <ProjectImage title={"Person Management"} src={`/projects/friday_at_work/edit_person.png`}
                    alt={`screenshot of person page`}>
        <p>
          The Person page allows you to update a person&apos;s information and view their receipt. The receipt displays
          all recorded consumptions, grouped by drink and price. If a drink&apos;s price has changed over time, separate
          entries are shown to preserve the original transaction history. The receipt can also be reset, clearing all
          recorded consumptions for future use.
        </p>
      </ProjectImage>
      <ProjectImage title={"Workspace management"} src={`/projects/friday_at_work/edit_workspace.png`}
                    alt={`screenshot of workspace settings page`}>
        <p>
          The Workspace page allows you to manage your workspace settings and user access. Each workspace contains its
          own people and drinks, keeping data isolated from other workspaces. You can rename the workspace and invite or
          manage other users who have access to it.
        </p>
      </ProjectImage>
      <ProjectImage title={"Permission levels"} src={`/projects/friday_at_work/edit_permissions.png`}
                    alt={`screenshot of workspace permissions page`}>
        <p>The application supports three levels of user permissions to provide controlled access to workspace features.
          Read Only users can view drinks, people, and receipts. Read & Write users can also register consumptions and
          manage people and drinks. Administrators have full access, including clearing receipts, managing workspace
          settings, and assigning user permissions.
        </p>
      </ProjectImage>
      <ProjectImage title={"Manage users"} src={`/projects/friday_at_work/manage_users.png`}
                    alt={`screenshot of administrator user management page`}>
        <p>
          Application administrators, distinct from workspace administrators, can create new user accounts and grant or
          revoke application administrator privileges. This separates global user management from workspace-specific
          administration.
        </p>
      </ProjectImage>
    </ProjectPage>
  );
}