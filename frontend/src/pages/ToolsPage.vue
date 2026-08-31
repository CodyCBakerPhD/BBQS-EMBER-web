<template>
  <q-page class="column items-center">
    <PageTitle title="Tools" />
    <div class="q-mx-xl">
      <q-card flat class="q-mt-lg">
        <q-card-section>
          <p>
            The EMBER team is committed to developing a resource that will serve a wide range of
            primary and secondary research needs. We are currently working closely with BBQS Data
            Coordination and Artificial Intelligence Center (DCAIC) as well as a number of members
            of the broader neurophysiology community to compile, optimize, or develop tools that can
            be readily deployed on the EMBER-hosted data. This includes integrating pose-estimation
            tools such as <LinkText :link="links.sleap" /> alongside other tool development efforts.
            Please contact the EMBER team if you wish to get involved in these ongoing discussions.
          </p>
        </q-card-section>
      </q-card>

      <q-card flat class="q-mb-lg">
        <q-card-section class="hearth-intro">
          <img class="hearth-logo" src="/hearth/hearth-logo.svg" alt="HEARTH" />
          <div>
            <div class="text-h4">
              <LinkText :link="links.hearth" />
            </div>
            <p>
              HEARTH (Hub for Exploratory Analysis, Resource-sharing, Testing, and
              Hypothesis-generation) is EMBER's portal of apps for preparing and refining data
              ahead of upload to the EMBER archive.
            </p>
          </div>
        </q-card-section>

        <q-card-section class="row justify-center q-col-gutter-md">
          <div v-for="app in hearthApps" :key="app.name" class="col-12 col-sm-6 col-md-4">
            <a :href="app.uri" target="_blank" rel="noopener noreferrer" class="hearth-app-card">
              <img class="hearth-app-card__logo" :src="app.logo" alt="" />
              <div class="hearth-app-card__name">{{ app.name }}</div>
              <div class="hearth-app-card__description">{{ app.description }}</div>
            </a>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LinkText from 'src/components/LinkText.vue';
import PageTitle from 'src/components/PageTitle.vue';
import { hearthApps } from 'src/constants/hearth';
import { links } from 'src/constants/links';
</script>

<style scoped>
.hearth-intro {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.hearth-logo {
  width: 4.5rem;
  height: 4.5rem;
  flex-shrink: 0;
}

.hearth-app-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  height: 100%;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.hearth-app-card:hover {
  border-color: $secondary;
  transform: translateY(-2px);
}

.hearth-app-card__logo {
  width: 3rem;
  height: 3rem;
}

.hearth-app-card__name {
  font-weight: bold;
}

.hearth-app-card__description {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .hearth-intro {
    flex-direction: column;
    text-align: center;
  }
}
</style>
